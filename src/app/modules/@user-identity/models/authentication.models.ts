export class User {
    id!: string;
    displayName!: string;
    givenName!: string;
    surname!: string;
    email!: string;
    mobilePhone!: string;
    preferredLanguage!: string;
    userPrincipalName!: string;
    country!: string;
    avatar!: string;
    timeZone!: string;
}

export type Profile = {
  id?: string;
  userPrincipalName?: string;
  businessPhones?: Array<string>;
  displayName?: string;
  givenName?: string;
  jobTitle?: string;
  mail?: string;
  mobilePhone?: string;
  officeLocation?: string;
  preferredLanguage?: string;
  surname?: string;
};
