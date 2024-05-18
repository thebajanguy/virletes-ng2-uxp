import { Injectable } from '@angular/core';
import { UtilitiesService } from '@app_modules_core/services/utilities.service';
import { User } from "../models/authentication.models";


@Injectable({ providedIn: 'root'})
export class TokenService {

  constructor(private utilities: UtilitiesService) {
  }

  public getToken(): string | null {
    return localStorage.getItem(this.utilities.UserTokenKey);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(this.utilities.UserTokenKey);
    localStorage.setItem(this.utilities.UserTokenKey, token);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(this.utilities.UserStorageKey);
    localStorage.setItem(this.utilities.UserStorageKey, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(this.utilities.UserStorageKey);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

      // <getAuthenticatedUserSnippet>
    //private async getAuthenticatedUser(result: { account: { accountIdentifier: string; name: string; idToken: { given_name: string; family_name: string; country: string; }; }; } | null): Promise<User> {
      private getAuthenticatedUser(result : any): User {
        if (!result) {
          let user = JSON.parse(JSON.stringify(localStorage.getItem('local.authenticated.user')) );
          if (user) {
              return user;
          }
          else {
              return new User();
          }
        }

        let user = new User();
        user.id          = result?.idTokenClaims?.oid;
        user.displayName = result?.idTokenClaims?.name;
        user.givenName   = result?.idTokenClaims?.given_name;
        user.surname     = result?.idTokenClaims?.family_name;
        user.country     = ''; //result?.idTokenClaims?.idToken.country;
        user.email       = result?.username; //(result.username) ? result?.idTokenClaims?.emails[0] : '';
        user.mobilePhone = '';
        user.preferredLanguage = '';
        user.userPrincipalName = result?.username;
        user.timeZone    = '';
        user.avatar      = '/assets/no-profile-photo.png';

        localStorage.setItem('local.authenticated.user', JSON.stringify(user));

        /*
        account
        {
          "homeAccountId": "49adcff3-bd50-4706-9464-d4a9f1169cff-b2c_1_signup_signin.a5472f1f-1ab6-482c-92ca-2cd7763e3918",
          "environment": "VirLetesb2c.b2clogin.com",
          "tenantId": "",
          "username": "AlvinBrathwaite@outlook.com",
          "localAccountId": "49adcff3-bd50-4706-9464-d4a9f1169cff",
          "name": "Alvin",
          "idTokenClaims": {
              "exp": 1668310431,
              "nbf": 1668306831,
              "ver": "1.0",
              "iss": "https://VirLetesb2c.b2clogin.com/a5472f1f-1ab6-482c-92ca-2cd7763e3918/v2.0/",
              "sub": "49adcff3-bd50-4706-9464-d4a9f1169cff",
              "aud": "635f135f-ac63-46d7-b71b-1fb4b9057903",
              "nonce": "8eb9ae23-f10b-419f-baf2-deaa1e9cc1a3",
              "iat": 1668306831,
              "auth_time": 1668306830,
              "oid": "49adcff3-bd50-4706-9464-d4a9f1169cff",
              "name": "Alvin",
              "given_name": "Alvin",
              "family_name": "Brathwaite",
              "emails": [
                  "AlvinBrathwaite@outlook.com"
              ],
              "tfp": "B2C_1_signup_signin"
          }
        }
        */

        return user;
      }
      // </getAuthenticatedUserSnippet>

}
