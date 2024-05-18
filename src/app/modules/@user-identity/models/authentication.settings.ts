import { MsalInterceptorConfiguration, MsalGuardConfiguration } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { LogLevel, Configuration, BrowserCacheLocation,} from '@azure/msal-browser';
import { environment } from '@environments/environment';
import { UtilitiesService } from '@app_modules_core/services/utilities.service';
import { IpServiceService } from '@app_modules_core/services/ip-service.service';

// MSAL CONFIGURARTION : BEGIN
const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1; // Remove this line to use Angular Universal
const $b2cDomainName = environment.aadB2C.b2cDomainName;
const $b2cDomainUrl = 'https://' + $b2cDomainName + '.b2clogin.com/' + $b2cDomainName + '.onmicrosoft.com/'



/************************   FACTORY CODE *************************************/


export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}
//      redirectUri:  environment.appSettings.siteUrl.concat(environment.aadB2C.redirectPath.toString()),


export function MSALInstanceFactory(): IPublicClientApplication {

  return new PublicClientApplication({
    auth: {
      clientId: environment.msalConfig.auth.clientId,
      authority: $b2cDomainUrl.concat(environment.b2cPolicies.names.signUpSignIn.toString()),
      redirectUri:  "/" + environment.aadB2C.redirectPath.toString(),
      postLogoutRedirectUri: environment.appSettings.siteUrl.concat(environment.aadB2C.postLogoutRedirectUri.toString()),
      authorityMetadata: environment.msalConfig.auth.authorityMetadata,
      knownAuthorities: [environment.b2cPolicies.authorityDomain],
      navigateToLoginRequestUrl: environment.msalConfig.auth.navigateToLoginRequestUrl, // Used to turn off default navigation to start page after login. Default is true. This is used only for redirect flows..
      clientCapabilities: ['CP1'], // This lets the resource server know that this client can handle claim challenges.
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Verbose,
        piiLoggingEnabled: false
      }
    }
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set(environment.protectedResources.graphMe.endpoint, environment.protectedResources.graphMe.scopes.read);
  //protectedResourceMap.set('https://graph.microsoft-ppe.com/v1.0/me', ['user.read']);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}
//        ...environment.protectedResources.graphMe.scopes,

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Popup,
    authRequest: {
      scopes: [...environment.loginRequest.scopes.read, ...environment.loginRequest.scopes.write],
    },
    loginFailedRoute: 'identity/account/login-failed'
  };
}
// MSAL CONFIGURARTION : END
