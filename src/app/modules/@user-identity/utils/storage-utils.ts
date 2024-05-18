import { environment } from "@environments/environment";

/**
 * This method stores the claim challenge to the localStorage in the browser to be used when acquiring a token
 * @param {String} claimsChallenge
 */
export const addClaimsToStorage = (claimsChallenge: string, claimsChallengeId: string): void => {
  //sessionStorage.setItem(claimsChallengeId, claimsChallenge);
  localStorage.setItem(claimsChallengeId, claimsChallenge);
};

/**
 * This method fetches the claim challenge from localStorage
 * @param {string} claimsChallengeId
 * @returns
 */
export const getClaimsFromStorage = (claimsChallengeId: string): any => {
  //return sessionStorage.getItem(claimsChallengeId);
  return localStorage.getItem(claimsChallengeId);
};

/**
 * This method clears localStorage of any claims challenge entry
 * @param {Object} account
 */
export const clearStorage = (account: any): void => {
  localStorage.removeItem(`${environment.appSettings.localUserStorageKey}`);
  sessionStorage.removeItem('msal.interaction.status');
  if(account)
    for (var key in sessionStorage) {
      if (key.startsWith(`cc.${environment.msalConfig.auth.clientId}.${account.idTokenClaims.oid}`)) {
          localStorage.removeItem(key);
        }
    }
};
