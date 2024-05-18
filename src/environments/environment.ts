export const environment = {
  production: false,
  baseUrl: '/',
  hmr: false,
  appConfig: 'appconfig.json',
  apis: {
    mediaApi: 'https://ipaas-media-api.azurewebsites.net/api',
    correspondenceApi: 'https://zeurtek-correspondence-api.azurewebsites.net/api',
    graphApiEndpoint: 'https://graph.microsoft.com',
  },

  // ************* iPaaS DEVELOPMENT - AZURE B2C Settings *************
//identity/account/auth  // identity/account/susi
  appSettings: {
    applicationName: 'Athlete Sport Profiles',
    siteUrl: 'http://localhost:5900/', // The redirect URI of the application, this should be same as the value in the application registration portal.Defaults to window.location.href.
    pageTitle: 'Sports Technology and Recruiting',
    emailSentTo: 'AllVirLetes@Outlook.com',
    localUserStorageKey: 'local.authenticated.user',
    userTokenKey: 'msal.idtoken',
  },
  aadB2C: {
    tenantId: 'sportstechb2bc.onmicrosoft.com',
    b2cDomainName: 'sportstechb2bc',
    postLogoutRedirectUri: 'identity/account/susi',
    redirectPath: 'identity/account/susi',
    loginRedirectPath: 'user-workspace/dashboard',
  },
  msalConfig: {
    auth: {
      clientId: 'a8b077c5-fe03-483a-a687-ce764771f816',
      validateAuthority: false,
      authorityMetadata: '',
      navigateToLoginRequestUrl: true, // Used to turn off default navigation to start page after login. Default is true. This is used only for redirect flows.
    }
  },
  protectedResources: {
    profileApi: {
      endpoint: 'https://sportstechb2bc.onmicrosoft.com/profile-api',
      scopes: {
        read: ['https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Read'],
        write: ['https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Write']
      }
    },
    managementApi: {
      endpoint: 'https://sportstechb2bc.onmicrosoft.com/manage-api',
      scopes: {
        read: ['https://sportstechb2bc.onmicrosoft.com/manage-api/Data.Read'],
        write: ['https://sportstechb2bc.onmicrosoft.com/manage-api/Data.Write']
      }
    },

    graphMe: {
      endpoint: 'https://graph.microsoft.com/v1.0/',
      scopes: {
        read: ['User.Read.All'],
        write: ['User.ReadWrite.All']
      }
      //scopes: ['https://VirLetesb2c.onmicrosoft.com/66a0b2f1-72c8-4f7f-aa5c-216e64ae7206/User.ReadWrite.All', 'https://VirLetesb2c.onmicrosoft.com/66a0b2f1-72c8-4f7f-aa5c-216e64ae7206/User.Read.All', 'https://VirLetesb2c.onmicrosoft.com/66a0b2f1-72c8-4f7f-aa5c-216e64ae7206/User.Read' ],  //User.ReadWrite.All&response_type=code  .default
    },
    graphContacts: {
      endpoint: 'https://graph.microsoft.com/v1.0/me/contacts',
      scopes: {
        read: ['User.Read.All'],
        write: ['User.ReadWrite.All']
      }

    },
  },
  loginRequest: {
    scopes: {
      read: ['https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Read'],
      write: ['https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Write']
    }
    //['https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Read', 'https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Write', 'https://sportstechb2bc.onmicrosoft.com/manage-api/Data.Read'],
    //scopes: ['openid', 'https%3A%2F%2Fsportstechb2bc.onmicrosoft.com%2Fmanage-api%2FData.Write', 'https%3A%2F%2Fsportstechb2bc.onmicrosoft.com%2Fmanage-api%2FData.Read']
    /*
    scopes: [
      'https://sportstechb2bc.onmicrosoft.com/manage-api/Data.Write',
      'https://sportstechb2bc.onmicrosoft.com/manage-api/Data.Read',
      'https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Write',
      'https://sportstechb2bc.onmicrosoft.com/profile-api/Profile.Read'
    ]
    */
  },

  b2cPolicies: {
    names: {
        signUpSignIn: 'B2C_1_signup_signin',
        editProfile: 'B2C_1_profile_edit',
        resetPassword: 'B2C_1_password_reset',
        signUp: 'B2C_1_signup_only',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://sportstechb2bc.b2clogin.com/sportstechb2bc.onmicrosoft.com/b2c_1_signup_signin'
        },
        resetPassword: {
            authority: 'https://sportstechb2bc.b2clogin.com/sportstechb2bc.onmicrosoft.com/b2c_1_password_reset'
        },
        editProfile: {
            authority: 'https://sportstechb2bc.b2clogin.com/sportstechb2bc.onmicrosoft.com/b2c_1_profile_edit'
        },
        signUp: {
            authority: 'https://sportstechb2bc.b2clogin.com/sportstechb2bc.onmicrosoft.com/b2c_1_signup_only'
        }
    },
    authorityDomain: 'sportstechb2bc.b2clogin.com',
    cache: {
      cacheLocation: 'localStorage', // CacheLocation: 'localStorage' | 'sessionStorage'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
