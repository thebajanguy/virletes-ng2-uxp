import { BaseDocument } from "../../../@shared/models";

export class Correspondence extends BaseDocument {
    firstName ?: string | null = '';
    lastName ?: string | null = '';
    age ?: string | null = '';
    gender ?: string | null = '';

    email ?: string | null = '';
    phoneNumber ?: string | null = '';

    interestedIn ?: string | null = '';
    subject ?: string | null = '';
    message ?: string | null = '';

    country ?: string | null = '';
    postalCode ?: string | null = '';

    companyName ?: string | null = '';
    companySize ?: string | null = '';
    jobTitle ?: string | null = '';
    industry ?: string | null = '';
    preferredDay ?: string | null = '';
    preferredTime?: string | null = '';

    emailSentTo?: string | null = '';
}