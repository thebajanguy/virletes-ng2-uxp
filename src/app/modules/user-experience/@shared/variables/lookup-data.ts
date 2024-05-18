import { Injectable } from "@angular/core";

@Injectable()
export class Lookups {

    Salutions() {
        const list = [
            { id: '', itemName: '--Salutation--' },
            { id: 'Miss', itemName: 'Miss' },
            { id: 'Mr', itemName: 'Mr' },
            { id: 'Mrs', itemName: 'Mrs' },
            { id: 'Ms', itemName: 'Ms' },
        ];
        return list;
    };

    PreferredMethodOfContacts() {
        const list = [
            { id: '', itemName: '--Preferred Method--' },
            { id: 'Email', itemName: 'Email' },
            { id: 'Text', itemName: 'Text' }
        ];

        return list;
    };

    Genders() {
        const list = [
            { id: '', itemName: '--Gender--' },
            { id: 'Female', itemName: 'Female' },
            { id: 'Male', itemName: 'Male' }
        ];
        return list;
    };

    UserTypes() {
        const list = [
            { id: '', itemName: '--User Type--' },
            { id: 'Athlete', itemName:  'Athlete' },
            { id: 'Guardian', itemName:  'Guardian' },
            { id: 'CollegeCoach', itemName:  'College Coach' },
            { id: 'TrainingCoach', itemName:  'Team Coach' },
            { id: 'ProCoach', itemName:  'Professional Coach' },
            { id: 'Scout', itemName:  'Scout' }
        ];
        return list;

    };

    AccountTypes() {
        const list = [
            { id: '', itemName: '--Account Type--' },
            { id: 'Athlete', itemName:  'Athlete' },
            { id: 'Guardian', itemName:  'Guardian' },
            { id: 'CollegeCoach', itemName:  'College Coach' },
            { id: 'TrainingCoach', itemName:  'Team Coach' },
            { id: 'ProCoach', itemName:  'Professional Coach' },
            { id: 'Scout', itemName:  'Scout' }
        ];
        return list;

    };

    Roles() {
        const list = [
            { id: '', itemName: '--User Role--' },
            { id: 'Athlete', itemName:  'Athlete' },
            { id: 'Guardian', itemName:  'Guardian' },
            { id: 'CollegeCoach', itemName:  'College Coach' },
            { id: 'TrainingCoach', itemName:  'Team Coach' },
            { id: 'ProCoach', itemName:  'Professional Coach' },
            { id: 'Scout', itemName:  'Scout' }
        ];
        return list;
    };

    LimitedRoles() {
        const list = [
            { id: '', itemName: '-- Register As --' },
            { id: 'Athlete', itemName: 'Athlete' },
            { id: 'CollegeCoach', itemName: 'College Coach' },
            { id: 'TeamCoach', itemName: 'Team Coach' }
        ];
        return list;
    };

    Careers () {
        const list = [
            { id: '', itemName: '--Career--' },
            { id: 'Agriculture',  itemName:  'Agriculture, Food and Natural Resources' },
            { id: 'Arts', itemName:  'Arts, Audio/Video Technology and Communications' },
            { id: 'Education', itemName: 'Education and Training' },
            { id: 'Government', itemName:  'Government and Public Administration' },
            { id: 'Hospitality', itemName:  'Hospitality and Tourism' },
            { id: 'InformationTechnology', itemName:  'Information Technology' },
            { id: 'Manufacturing', itemName:  'Manufacturing' },
            { id: 'Science', itemName:  'Science, Technology, Engineering and Mathematics' },
            { id: 'ArchitectureandConstruction', itemName:  'Architecture and Construction' },
            { id: 'Business', itemName:  'Business Management and Administration' },
            { id: 'Finance', itemName:  'Finance' },
            { id: 'HealthScience', itemName:  'Health Science' },
            { id: 'HumanServices', itemName:  'Human Services' },
            { id: 'Law', itemName:  'Law, Public Safety, Corrections and Security' },
            { id: 'Marketing', itemName:  'Marketing, Sales and Service' },
            { id: 'Transportation', itemName:  'Transportation, Distribution and Logistics' },
            { id: 'Student', itemName:  'Student' }
        ];
        return list;
    };

    CollegiateAssociations () {
        const list = [
            { id: '', itemName: '--College Association--' },
            { id: 'NCAA', itemName:  'NCAA' },
            { id: 'NAIA', itemName:  'NAIA' },
            { id: 'NJCAA', itemName:  'NJCAA' },
            { id: 'NCCAA', itemName: 'NCCAA' },
            { id: 'USCAA', itemName: 'USCAA' },
            { id: 'OTHER', itemName: 'OTHER' }
        ];
        return list;
    };

    CollegiateLevel() {
        const list = [
            { id: '', itemName: '--Division--' },
            { id: 'Division1', itemName:  'Division I' },
            { id: 'Division2', itemName: 'Division II' },
            { id: 'Division3', itemName: 'Division III' },
            { id: 'NAIA', itemName: 'NAIA' },
            { id: 'NJCAA', itemName:  'NJCAA' },
            { id: 'OTHER', itemName: 'OTHER' },
        ];
        return list;
    };

    CollegeTypes  () {
        const list = [
            { id: '', itemName: '--College Type--' },
            { id: 'Military', itemName: 'Military' },
            { id: 'Christian', itemName: 'Christian' },
            { id: 'HistoricallyBlack', itemName: 'Historically Black' },
            { id: 'WomenOnly', itemName: 'Women Only' },
            { id: 'MenOnly', itemName: 'Men Only' }
        ];
        return list;
    };

    CommunicationTypes() {
        const list = [
            { id: '', itemName: '--Communication Type--' },
            { id: 'RequestForInformation', itemName: 'Request-For-Information' },
            { id: 'Newsletter', itemName: 'Newsletter' }
        ];
        return list;
    };

    TestTypes() {
        const list = [
            { id: '', itemName: '--Test Type--' },
            { id: 'SAT', itemName: 'SAT' },
            { id: 'ACT', itemName: 'ACT' },
            { id: 'CXC', itemName: 'CXC' },
            { id: 'CAPE', itemName: 'CAPE' },
        ];
        return list;
    };

    OfferStatuses() {
        const list = [
            { id: '', itemName: '--Offer Status--' },
            { id: 'Accepted', itemName: 'Accepted' },
            { id: 'Pending', itemName: 'Declined' },
            { id: 'CXC', itemName: 'Pending' }
        ];
        return list;
    };

    Selectivity() {
        const list = [
            { id: '', itemName: '--Selectivity--' },
            { id: 'Yes', itemName: 'Yes' },
            { id: 'No', itemName:  'No' },
            { id: 'Maybe', itemName:  'Maybe' }
        ];
        return list;
    };

    TimeMethods() {
        const list = [
            { id: '', itemName: '--Time Method--' },
            { id: 'Digital', itemName: 'Digital'},
            { id: 'Hand', itemName: 'Hand'},
            { id: 'Laser', itemName:  'Laser'},
            { id: 'FAT', itemName: 'FAT'},
            { id: 'Other', itemName: 'Other'}
        ];
        return list;
    };

    GuardianRelationships() {
        const list = [
            { id: '', itemName: '--Relationship--' },
            { id: 'Mother', itemName:  'Mother'},
            { id: 'Father', itemName: 'Father'},
            { id: 'Aunt', itemName:  'Aunt'},
            { id: 'Uncle', itemName: 'Uncle'},
            { id: 'GrandMother', itemName:  'Grand Mother'},
            { id: 'GrandFather', itemName: 'Grand Father'},
            { id: 'AdoptedMother', itemName: 'Adopted Mother'},
            { id: 'AdoptedFather', itemName: 'Adopted Father'},
            { id: 'LegalGuardian', itemName: 'Legal Guardian'},
            { id: 'Other', itemName: 'Other'},
        ];
        return list;
    };

    PhoneTypes() {
        // Array<{ text?: string, path?: string }>
        const list = [
            { id: '', itemName: '--Phone Type--' },
            { id: 'Home', itemName: 'Home'},
            { id: 'DadHome', itemName: 'Dad Home'},
            { id: 'MomHome', itemName: 'Mom Home'},
            { id: 'MyMobile', itemName: 'My Mobile'},
            { id: 'DadMobile', itemName: 'Dad Mobile'},
            { id: 'MomMobile', itemName: 'Mom Mobile'},
            { id: 'DadOffice', itemName: 'Dad Office'},
            { id: 'MomOffice', itemName: 'Mom Office'},
            { id: 'Other', itemName: 'Other'}
        ];
        return list;
    };

    AddressTypes() {
        const list = [
            { id: '', itemName: '--Address Type--' },
            { id: 'House', itemName: 'House' },
            { id: 'Apartment', itemName: 'Apartment' },
            { id: 'Building', itemName: 'Building' },
            { id: 'Other', itemName: 'Other' },
        ];
        return list;
    };

    Sports() {
        const list = [
            { id: '', itemName: '--Sport--' },
            { id: 'Athletics', itemName: 'Athletics' },
            { id: 'Archery', itemName: 'Archery' },
            { id: 'Badminton', itemName: 'Badminton' },
            { id: 'Baseball', itemName: 'Baseball' },
            { id: 'Basketball', itemName: 'Basketball' },
            { id: 'Bowling', itemName: 'Bowling' },
            { id: 'Boxing', itemName: 'Boxing' },
            { id: 'Canoeing', itemName: 'Canoeing' },
            { id: 'Cricket', itemName: 'Cricket' },
            { id: 'Curling', itemName: 'Curling' },
            { id: 'Cycling', itemName: 'Cycling' },
            { id: 'Darts', itemName: 'Darts' },
            { id: 'Disability Sport', itemName: 'Disability Sport' },
            { id: 'Diving', itemName: 'Diving' },
            { id: 'Equestrian', itemName: 'Equestrian' },
            { id: 'Fencing', itemName: 'Fencing' },
            { id: 'Field Hockey', itemName: 'Field Hockey' },
            { id: 'Football', itemName: 'Football' },
            { id: 'Formula 1', itemName: 'Formula 1' },
            { id: 'Gaelic Games', itemName: 'Gaelic Games' },
            { id: 'Golf', itemName: 'Golf' },
            { id: 'Gymnastics', itemName: 'Gymnastics' },
            { id: 'Handball', itemName: 'Handball' },
            { id: 'Horse Racing', itemName: 'Horse Racing' },
            { id: 'Ice Hockey', itemName: 'Ice Hockey' },
            { id: 'Judo', itemName: 'Judo' },
            { id: 'Lawn Tennis', itemName: 'Lawn Tennis' },
            { id: 'Mixed Martial Arts', itemName: 'Mixed Martial Arts' },
            { id: 'Modern Pentathlon', itemName: 'Modern Pentathlon' },
            { id: 'Motorsport', itemName: 'Motorsport' },
            { id: 'Netball', itemName: 'Netball' },
            { id: 'Olympic Sports', itemName: 'Olympic Sports' },
            { id: 'Road Tennis', itemName: 'Road Tennis' },
            { id: 'Rowing', itemName: 'Rowing' },
            { id: 'Rugby', itemName: 'Rugby' },
            { id: 'Sailing', itemName: 'Sailing' },
            { id: 'Shooting', itemName: 'Shooting' },
            { id: 'Snooker', itemName: 'Snooker' },
            { id: 'Soccer', itemName: 'Soccer' },
            { id: 'Squash', itemName: 'Squash' },
            { id: 'Swimming', itemName: 'Swimming' },
            { id: 'Table Tennis', itemName: 'Table Tennis' },
            { id: 'Taekwondo', itemName: 'Taekwondo' },
            { id: 'Triathlon', itemName: 'Triathlon' },
            { id: 'Volleyball', itemName: 'Volleyball' },
            { id: 'Weightlifting', itemName: 'Weightlifting' },
            { id: 'Winter Sports', itemName: 'Winter Sports' },
            { id: 'Wrestling', itemName: 'Wrestling' },
            { id: 'Other', itemName: 'Other' },
        ];
        return list;
    };

    CountriesList() {
        const list = [
            { id: '', itemName: '--Country--' },
            {
                id: 'Afghanistan', itemName: 'Afghanistan',
                'dial_code': '+93',
                'code': 'AF'
            },
            {
                id: 'Aland Islands', itemName: 'Aland Islands',
                'dial_code': '+358',
                'code': 'AX'
            },
            {
                id: 'Albania', itemName: 'Albania',
                'dial_code': '+355',
                'code': 'AL'
            },
            {
                id: 'Algeria', itemName: 'Algeria',
                'dial_code': '+213',
                'code': 'DZ'
            },
            {
                id: 'American Samoa', itemName: 'American Samoa',
                'dial_code': '+1684',
                'code': 'AS'
            },
            {
                id: 'Andorra',  itemName: 'Andorra',
                'dial_code': '+376',
                'code': 'AD'
            },
            {
                id: 'Angola', itemName: 'Angola',
                'dial_code': '+244',
                'code': 'AO'
            },
            {
                id: 'Anguilla', itemName: 'Anguilla',
                'dial_code': '+1264',
                'code': 'AI'
            },
            {
                id: 'Antarctica', itemName: 'Antarctica',
                'dial_code': '+672',
                'code': 'AQ'
            },
            {
                id: 'Antigua and Barbuda', itemName: 'Antigua and Barbuda',
                'dial_code': '+1268',
                'code': 'AG'
            },
            {
                id: 'Argentina', itemName: 'Argentina',
                'dial_code': '+54',
                'code': 'AR'
            },
            {
                id: 'Armenia', itemName: 'Armenia',
                'dial_code': '+374',
                'code': 'AM'
            },
            {
                id: 'Aruba', itemName: 'Aruba',
                'dial_code': '+297',
                'code': 'AW'
            },
            {
                id: 'Australia', itemName: 'Australia',
                'dial_code': '+61',
                'code': 'AU'
            },
            {
                id: 'Austria', itemName: 'Austria',
                'dial_code': '+43',
                'code': 'AT'
            },
            {
                id: 'Azerbaijan', itemName: 'Azerbaijan',
                'dial_code': '+994',
                'code': 'AZ'
            },
            {
                id: 'Bahamas', itemName: 'Bahamas',
                'dial_code': '+1242',
                'code': 'BS'
            },
            {
                id: 'Bahrain', itemName: 'Bahrain',
                'dial_code': '+973',
                'code': 'BH'
            },
            {
                id: 'Bangladesh', itemName: 'Bangladesh',
                'dial_code': '+880',
                'code': 'BD'
            },
            {
                id: 'Barbados', itemName: 'Barbados',
                'dial_code': '+1246',
                'code': 'BB'
            },
            {
                id: 'Belarus', itemName: 'Belarus',
                'dial_code': '+375',
                'code': 'BY'
            },
            {
                id: 'Belgium', itemName: 'Belgium',
                'dial_code': '+32',
                'code': 'BE'
            },
            {
                id: 'Belize', itemName: 'Belize',
                'dial_code': '+501',
                'code': 'BZ'
            },
            {
                id: 'Benin', itemName: 'Benin',
                'dial_code': '+229',
                'code': 'BJ'
            },
            {
                id: 'Bermuda', itemName: 'Bermuda',
                'dial_code': '+1441',
                'code': 'BM'
            },
            {
                id: 'Bhutan', itemName: 'Bhutan',
                'dial_code': '+975',
                'code': 'BT'
            },
            {
                id: 'Bolivia, Plurinational State of', itemName: 'Bolivia, Plurinational State of',
                'dial_code': '+591',
                'code': 'BO'
            },
            {
                id: 'Bosnia and Herzegovina', itemName: 'Bosnia and Herzegovina',
                'dial_code': '+387',
                'code': 'BA'
            },
            {
                id: 'Botswana', itemName: 'Botswana',
                'dial_code': '+267',
                'code': 'BW'
            },
            {
                id: 'Brazil', itemName: 'Brazil',
                'dial_code': '+55',
                'code': 'BR'
            },
            {
                id: 'British Indian Ocean Territory', itemName: 'British Indian Ocean Territory',
                'dial_code': '+246',
                'code': 'IO'
            },
            {
                id: 'Brunei Darussalam', itemName: 'Brunei Darussalam',
                'dial_code': '+673',
                'code': 'BN'
            },
            {
                id: 'Bulgaria', itemName: 'Bulgaria',
                'dial_code': '+359',
                'code': 'BG'
            },
            {
                id: 'Burkina Faso', itemName: 'Burkina Faso',
                'dial_code': '+226',
                'code': 'BF'
            },
            {
                id: 'Burundi', itemName: 'Burundi',
                'dial_code': '+257',
                'code': 'BI'
            },
            {

                id: 'Cambodia', itemName: 'Cambodia',

                'dial_code': '+855',
                'code': 'KH'
            },
            {
                id: 'Cameroon', itemName: 'Cameroon',
                'dial_code': '+237',
                'code': 'CM'
            },
            {
                id: 'Canada', itemName: 'Canada',
                'dial_code': '+1',
                'code': 'CA'
            },
            {
                id: 'Cape Verde', itemName: 'Cape Verde',
                'dial_code': '+238',
                'code': 'CV'
            },
            {
                id: 'Cayman Islands', itemName: 'Cayman Islands',
                'dial_code': '+ 345',
                'code': 'KY'
            },
            {
                id: 'Central African Republic', itemName: 'Central African Republic',
                'dial_code': '+236',
                'code': 'CF'
            },
            {
                id: 'Chad', itemName: 'Chad',
                'dial_code': '+235',
                'code': 'TD'
            },
            {
                id: 'Chile', itemName: 'Chile',
                'dial_code': '+56',
                'code': 'CL'
            },
            {
                id: 'China', itemName: 'China',
                'dial_code': '+86',
                'code': 'CN'
            },
            {
                id: 'Christmas Island', itemName: 'Christmas Island',
                'dial_code': '+61',
                'code': 'CX'
            },
            {
                id: 'Cocos (Keeling) Islands', itemName: 'Cocos (Keeling) Islands',
                'dial_code': '+61',
                'code': 'CC'
            },
            {
                id: 'Colombia', itemName: 'Colombia',
                'dial_code': '+57',
                'code': 'CO'
            },
            {
                id: 'Comoros', itemName: 'Comoros',
                'dial_code': '+269',
                'code': 'KM'
            },
            {
                id: 'Congo', itemName: 'Congo',
                'dial_code': '+242',
                'code': 'CG'
            },
            {
                id: 'Congo, The Democratic Republic of the Congo', itemName: 'Congo, The Democratic Republic of the Congo',
                'dial_code': '+243',
                'code': 'CD'
            },
            {
                id: 'Cook Islands', itemName: 'Cook Islands',
                'dial_code': '+682',
                'code': 'CK'
            },
            {
                id: 'Costa Rica', itemName: 'Costa Rica',
                'dial_code': '+506',
                'code': 'CR'
            },
            {
                id: 'Cote d\'Ivoire', itemName: 'Cote d\'Ivoire',
                'dial_code': '+225',
                'code': 'CI'
            },
            {
                id: 'Croatia', itemName: 'Croatia',
                'dial_code': '+385',
                'code': 'HR'
            },
            {
                id: 'Cuba', itemName: 'Cuba',
                'dial_code': '+53',
                'code': 'CU'
            },
            {
                id: 'Cyprus', itemName: 'Cyprus',
                'dial_code': '+357',
                'code': 'CY'
            },
            {
                id: 'Czech Republic', itemName: 'Czech Republic',
                'dial_code': '+420',
                'code': 'CZ'
            },
            {
                id: 'Denmark', itemName: 'Denmark',
                'dial_code': '+45',
                'code': 'DK'
            },
            {
                id: 'Djibouti', itemName: 'Djibouti',
                'dial_code': '+253',
                'code': 'DJ'
            },
            {
                id: 'Dominica', itemName: 'Dominica',
                'dial_code': '+1767',
                'code': 'DM'
            },
            {
                id: 'Dominican Republic', itemName: 'Dominican Republic',
                'dial_code': '+1849',
                'code': 'DO'
            },
            {
                id: 'Ecuador', itemName: 'Ecuador',
                'dial_code': '+593',
                'code': 'EC'
            },
            {
                id: 'Egypt', itemName: 'Egypt',
                'dial_code': '+20',
                'code': 'EG'
            },
            {
                id: 'El Salvador', itemName: 'El Salvador',
                'dial_code': '+503',
                'code': 'SV'
            },
            {
                id: 'Equatorial Guinea', itemName: 'Equatorial Guinea',
                'dial_code': '+240',
                'code': 'GQ'
            },
            {
                id: 'Eritrea', itemName: 'Eritrea',
                'dial_code': '+291',
                'code': 'ER'
            },
            {
                id: 'Estonia', itemName: 'Estonia',
                'dial_code': '+372',
                'code': 'EE'
            },
            {
                id: 'Ethiopia', itemName: 'Ethiopia',
                'dial_code': '+251',
                'code': 'ET'
            },
            {
                id: 'Falkland Islands (Malvinas)', itemName: 'Falkland Islands (Malvinas)',
                'dial_code': '+500',
                'code': 'FK'
            },
            {
                id: 'Faroe Islands', itemName: 'Faroe Islands',
               'dial_code': '+298',
                'code': 'FO'
            },
            {
                id: 'Fiji', itemName: 'Fiji',
                'dial_code': '+679',
                'code': 'FJ'
            },
            {
                id: 'Finland', itemName: 'Finland',
                'dial_code': '+358',
                'code': 'FI'
            },
            {
                id: 'France', itemName: 'France',
                'dial_code': '+33',
                'code': 'FR'
            },
            {
                id: 'French Guiana', itemName: 'French Guiana',
                'dial_code': '+594',
                'code': 'GF'
            },
            {
                id: 'French Polynesia', itemName: 'French Polynesia',
                'dial_code': '+689',
                'code': 'PF'
            },
            {
                id: 'Gabon', itemName: 'Gabon',
                'dial_code': '+241',
                'code': 'GA'
            },
            {
                id: 'Gambia', itemName: 'Gambia',
                'dial_code': '+220',
                'code': 'GM'
            },
            {
                id: 'Georgia', itemName: 'Georgia',
                'dial_code': '+995',
                'code': 'GE'
            },
            {
                id: 'Germany', itemName: 'Germany',
                'dial_code': '+49',
                'code': 'DE'
            },
            {
                id: 'Ghana', itemName: 'Ghana',
                'dial_code': '+233',
                'code': 'GH'
            },
            {
                id: 'Gibraltar', itemName: 'Gibraltar',
                'dial_code': '+350',
                'code': 'GI'
            },
            {
                id: 'Greece', itemName: 'Greece',
                'dial_code': '+30',
                'code': 'GR'
            },
            {
                id: 'Greenland', itemName: 'Greenland',
                'dial_code': '+299',
                'code': 'GL'
            },
            {
                id: 'Grenada', itemName: 'Grenada',
                'dial_code': '+1473',
                'code': 'GD'
            },
            {
                id: 'Guadeloupe', itemName: 'Guadeloupe',
                'dial_code': '+590',
                'code': 'GP'
            },
            {
                id: 'Guam', itemName: 'Guam',
                'dial_code': '+1671',
                'code': 'GU'
            },
            {
                id: 'Guatemala', itemName: 'Guatemala',
                'dial_code': '+502',
                'code': 'GT'
            },
            {
                id: 'Guernsey', itemName: 'Guernsey',
                'dial_code': '+44',
                'code': 'GG'
            },
            {
                id: 'Guinea', itemName: 'Guinea',
                'dial_code': '+224',
                'code': 'GN'
            },
            {
                id: 'Guinea-Bissau', itemName: 'Guinea-Bissau',
                'dial_code': '+245',
                'code': 'GW'
            },
            {
                id: 'Guyana', itemName: 'Guyana',
                'dial_code': '+595',
                'code': 'GY'
            },
            {
                id: 'Haiti', itemName: 'Haiti',
                'dial_code': '+509',
                'code': 'HT'
            },
            {
                id: 'Holy See (Vatican City State)', itemName: 'Holy See (Vatican City State)',
                'dial_code': '+379',
                'code': 'VA'
            },
            {
                id: 'Honduras', itemName: 'Honduras',
                'dial_code': '+504',
                'code': 'HN'
            },
            {
                id: 'Hong Kong', itemName: 'Hong Kong',
                'dial_code': '+852',
                'code': 'HK'
            },
            {
                id: 'Hungary', itemName: 'Hungary',
                'dial_code': '+36',
                'code': 'HU'
            },
            {
                id: 'Iceland', itemName: 'Iceland',
                'dial_code': '+354',
                'code': 'IS'
            },
            {
                id: 'India', itemName: 'India',
                'dial_code': '+91',
                'code': 'IN'
            },
            {
                id: 'Indonesia', itemName: 'Indonesia',
                'dial_code': '+62',
                'code': 'ID'
            },
            {
                id: 'Iran, Islamic Republic of Persian Gulf', itemName: 'Iran, Islamic Republic of Persian Gulf',
                'dial_code': '+98',
                'code': 'IR'
            },
            {
                id: 'Iraq', itemName: 'Iraq',
                'dial_code': '+964',
                'code': 'IQ'
            },
            {
                id: 'Ireland', itemName: 'Ireland',
                'dial_code': '+353',
                'code': 'IE'
            },
            {
                id: 'Isle of Man', itemName: 'Isle of Man',
                'dial_code': '+44',
                'code': 'IM'
            },
            {
                id: 'Israel', itemName: 'Israel',
                'dial_code': '+972',
                'code': 'IL'
            },
            {
                id: 'Italy', itemName: 'Italy',
                'dial_code': '+39',
                'code': 'IT'
            },
            {
                id: 'Jamaica', itemName: 'Jamaica',
                'dial_code': '+1876',
                'code': 'JM'
            },
            {
                id: 'Japan', itemName: 'Japan',
                'dial_code': '+81',
                'code': 'JP'
            },
            {
                id: 'Jersey', itemName: 'Jersey',
                'dial_code': '+44',
                'code': 'JE'
            },
            {
                id: 'Jordan', itemName: 'Jordan',
                'dial_code': '+962',
                'code': 'JO'
            },
            {
                id: 'Kazakhstan', itemName: 'Kazakhstan',
                'dial_code': '+77',
                'code': 'KZ'
            },
            {
                id: 'Kenya', itemName: 'Kenya',
                'dial_code': '+254',
                'code': 'KE'
            },
            {
                id: 'Kiribati', itemName: 'Kiribati',
                'dial_code': '+686',
                'code': 'KI'
            },
            {
                id: 'Korea, Democratic People\'s Republic of Korea', itemName: 'Korea, Democratic People\'s Republic of Korea',
                'dial_code': '+850',
                'code': 'KP'
            },
            {
                id: 'Korea, Republic of South Korea', itemName: 'Korea, Republic of South Korea',
                'dial_code': '+82',
                'code': 'KR'
            },
            {
                id: 'Kuwait', itemName: 'Kuwait',
                'dial_code': '+965',
                'code': 'KW'
            },
            {
                id: 'Kyrgyzstan', itemName: 'Kyrgyzstan',
                'dial_code': '+996',
                'code': 'KG'
            },
            {
                id: 'Laos', itemName: 'Laos',
                'dial_code': '+856',
                'code': 'LA'
            },
            {
                id: 'Latvia', itemName: 'Latvia',
                'dial_code': '+371',
                'code': 'LV'
            },
            {
                id: 'Lebanon', itemName: 'Lebanon',
                'dial_code': '+961',
                'code': 'LB'
            },
            {
                id: 'Lesotho', itemName: 'Lesotho',
                'dial_code': '+266',
                'code': 'LS'
            },
            {
                id: 'Liberia', itemName: 'Liberia',
                'dial_code': '+231',
                'code': 'LR'
            },
            {
                id: 'Libyan Arab Jamahiriya', itemName: 'Libyan Arab Jamahiriya',
                'dial_code': '+218',
                'code': 'LY'
            },
            {
                id: 'Liechtenstein', itemName: 'Liechtenstein',
                'dial_code': '+423',
                'code': 'LI'
            },
            {
                id: 'Lithuania', itemName: 'Lithuania',
                'dial_code': '+370',
                'code': 'LT'
            },
            {
                id: 'Luxembourg', itemName: 'Luxembourg',
                'dial_code': '+352',
                'code': 'LU'
            },
            {
                id: 'Macao', itemName: 'Macao',
                'dial_code': '+853',
                'code': 'MO'
            },
            {
                id: 'Macedonia', itemName: 'Macedonia',
                'dial_code': '+389',
                'code': 'MK'
            },
            {
                id: 'Madagascar', itemName: 'Madagascar',
                'dial_code': '+261',
                'code': 'MG'
            },
            {
                id: 'Malawi', itemName: 'Malawi',
                'dial_code': '+265',
                'code': 'MW'
            },
            {
                id: 'Malaysia', itemName: 'Malaysia',
                'dial_code': '+60',
                'code': 'MY'
            },
            {
                id: 'Maldives', itemName: 'Maldives',
                'dial_code': '+960',
                'code': 'MV'
            },
            {
                id: 'Mali', itemName: 'Mali',
                'dial_code': '+223',
                'code': 'ML'
            },
            {
                id: 'Malta', itemName: 'Malta',
                'dial_code': '+356',
                'code': 'MT'
            },
            {
                id: 'Marshall Islands', itemName: 'Marshall Islands',
                'dial_code': '+692',
                'code': 'MH'
            },
            {
                id: 'Martinique', itemName: 'Martinique',
                'dial_code': '+596',
                'code': 'MQ'
            },
            {
                id: 'Mauritania', itemName: 'Mauritania',
                'dial_code': '+222',
                'code': 'MR'
            },
            {
                id: 'Mauritius', itemName: 'Mauritius',
                'dial_code': '+230',
                'code': 'MU'
            },
            {
                id: 'Mayotte', itemName: 'Mayotte',
                'dial_code': '+262',
                'code': 'YT'
            },
            {
                id: 'Mexico', itemName: 'Mexico',
                'dial_code': '+52',
                'code': 'MX'
            },
            {
                id: 'Micronesia, Federated States of Micronesia', itemName: 'Micronesia, Federated States of Micronesia',
                'dial_code': '+691',
                'code': 'FM'
            },
            {
                id: 'Moldova', itemName: 'Moldova',
                'dial_code': '+373',
                'code': 'MD'
            },
            {
                id: 'Monaco', itemName: 'Monaco',
                'dial_code': '+377',
                'code': 'MC'
            },
            {
                id: 'Mongolia', itemName: 'Mongolia',
                'dial_code': '+976',
                'code': 'MN'
            },
            {
                id: 'Montenegro', itemName: 'Montenegro',
                'dial_code': '+382',
                'code': 'ME'
            },
            {
                id: 'Montserrat', itemName: 'Montserrat',
                'dial_code': '+1664',
                'code': 'MS'
            },
            {
                id: 'Morocco', itemName: 'Morocco',
                'dial_code': '+212',
                'code': 'MA'
            },
            {
                id: 'Mozambique', itemName: 'Mozambique',
                'dial_code': '+258',
                'code': 'MZ'
            },
            {
                id: 'Myanmar', itemName: 'Myanmar',
                'dial_code': '+95',
                'code': 'MM'
            },
            {
                id: 'Namibia', itemName: 'Namibia',
                'dial_code': '+264',
                'code': 'NA'
            },
            {
                id: 'Nauru', itemName: 'Nauru',
                'dial_code': '+674',
                'code': 'NR'
            },
            {
                id: 'Nepal', itemName: 'Nepal',
                'dial_code': '+977',
                'code': 'NP'
            },
            {
                id: 'Netherlands', itemName: 'Netherlands',
                'dial_code': '+31',
                'code': 'NL'
            },
            {
                id: 'Netherlands Antilles', itemName: 'Netherlands Antilles',
                'dial_code': '+599',
                'code': 'AN'
            },
            {
                id: 'New Caledonia', itemName: 'New Caledonia',
                'dial_code': '+687',
                'code': 'NC'
            },
            {
                id: 'New Zealand', itemName: 'New Zealand',
                'dial_code': '+64',
                'code': 'NZ'
            },
            {
                id: 'Nicaragua', itemName: 'Nicaragua',
                'dial_code': '+505',
                'code': 'NI'
            },
            {
                id: 'Niger', itemName: 'Niger',
                'dial_code': '+227',
                'code': 'NE'
            },
            {
                id: 'Nigeria', itemName: 'Nigeria',
                'dial_code': '+234',
                'code': 'NG'
            },
            {
                id: 'Niue', itemName: 'Niue',
                'dial_code': '+683',
                'code': 'NU'
            },
            {
                id: 'Norfolk Island', itemName: 'Norfolk Island',
                'dial_code': '+672',
                'code': 'NF'
            },
            {
                id: 'Northern Mariana Islands', itemName: 'Northern Mariana Islands',
                'dial_code': '+1670',
                'code': 'MP'
            },
            {
                id: 'Norway', itemName: 'Norway',
                'dial_code': '+47',
                'code': 'NO'
            },
            {
                id: 'Oman', itemName: 'Oman',
                'dial_code': '+968',
                'code': 'OM'
            },
            {
                id: 'Pakistan', itemName: 'Pakistan',
                'dial_code': '+92',
                'code': 'PK'
            },
            {
                id: 'Palau', itemName: 'Palau',
                'dial_code': '+680',
                'code': 'PW'
            },
            {
                id: 'Palestinian Territory, Occupied', itemName: 'Palestinian Territory, Occupied',
                'dial_code': '+970',
                'code': 'PS'
            },
            {
                id: 'Panama', itemName: 'Panama',
                'dial_code': '+507',
                'code': 'PA'
            },
            {
                id: 'Papua New Guinea', itemName: 'Papua New Guinea',
                'dial_code': '+675',
                'code': 'PG'
            },
            {
                id: 'Paraguay', itemName: 'Paraguay',
                'dial_code': '+595',
                'code': 'PY'
            },
            {
                id: 'Peru', itemName: 'Peru',
                'dial_code': '+51',
                'code': 'PE'
            },
            {
                id: 'Philippines', itemName: 'Philippines',
                'dial_code': '+63',
                'code': 'PH'
            },
            {
                id: 'Belarus', itemName: 'Pitcairn',
                'dial_code': '+872',
                'code': 'PN'
            },
            {
                id: 'Poland', itemName: 'Poland',
                'dial_code': '+48',
                'code': 'PL'
            },
            {
                id: 'Portugal', itemName: 'Portugal',
                'dial_code': '+351',
                'code': 'PT'
            },
            {
                id: 'Puerto Rico', itemName: 'Puerto Rico',
                'dial_code': '+1939',
                'code': 'PR'
            },
            {
                id: 'Qatar', itemName: 'Qatar',
                'dial_code': '+974',
                'code': 'QA'
            },
            {
                id: 'Romania', itemName: 'Romania',
                'dial_code': '+40',
                'code': 'RO'
            },
            {
                id: 'Russia', itemName: 'Russia',
                'dial_code': '+7',
                'code': 'RU'
            },
            {
                id: 'Rwanda', itemName: 'Rwanda',
                'dial_code': '+250',
                'code': 'RW'
            },
            {
                id: 'Reunion', itemName: 'Reunion',
                'dial_code': '+262',
                'code': 'RE'
            },
            {
                id: 'Saint Barthelemy', itemName: 'Saint Barthelemy',
                'dial_code': '+590',
                'code': 'BL'
            },
            {
                id: 'Saint Helena, Ascension and Tristan Da Cunha', itemName: 'Saint Helena, Ascension and Tristan Da Cunha',
                'dial_code': '+290',
                'code': 'SH'
            },
            {
                id: 'Saint Kitts and Nevis', itemName: 'Saint Kitts and Nevis',
                'dial_code': '+1869',
                'code': 'KN'
            },
            {
                id: 'Saint Lucia', itemName: 'Saint Lucia',
                'dial_code': '+1758',
                'code': 'LC'
            },
            {
                id: 'Saint Martin', itemName: 'Saint Martin',
                'dial_code': '+590',
                'code': 'MF'
            },
            {
                id: 'Saint Pierre and Miquelon', itemName: 'Saint Pierre and Miquelon',
                'dial_code': '+508',
                'code': 'PM'
            },
            {
                id: 'Saint Vincent and the Grenadines', itemName: 'Saint Vincent and the Grenadines',
                'dial_code': '+1784',
                'code': 'VC'
            },
            {
                id: 'Samoa', itemName: 'Samoa',
                'dial_code': '+685',
                'code': 'WS'
            },
            {
                id: 'San Marino', itemName: 'San Marino',
                'dial_code': '+378',
                'code': 'SM'
            },
            {
                id: 'Sao Tome and Principe', itemName: 'Sao Tome and Principe',
                'dial_code': '+239',
                'code': 'ST'
            },
            {
                id: 'Saudi Arabia', itemName: 'Saudi Arabia',
                'dial_code': '+966',
                'code': 'SA'
            },
            {
                id: 'Senegal', itemName: 'Senegal',
                'dial_code': '+221',
                'code': 'SN'
            },
            {
                id: 'Serbia', itemName: 'Serbia',
                'dial_code': '+381',
                'code': 'RS'
            },
            {
                id: 'Seychelles', itemName: 'Seychelles',
                'dial_code': '+248',
                'code': 'SC'
            },
            {
                id: 'Sierra Leone', itemName: 'Sierra Leone',
                'dial_code': '+232',
                'code': 'SL'
            },
            {
                id: 'Singapore', itemName: 'Singapore',
                'dial_code': '+65',
                'code': 'SG'
            },
            {
                id: 'Slovakia', itemName: 'Slovakia',
                'dial_code': '+421',
                'code': 'SK'
            },
            {
                id: 'Slovenia', itemName: 'Slovenia',
                'dial_code': '+386',
                'code': 'SI'
            },
            {
                id: 'Solomon Islands', itemName: 'Solomon Islands',
                'dial_code': '+677',
                'code': 'SB'
            },
            {
                id: 'Somalia', itemName: 'Somalia',
                'dial_code': '+252',
                'code': 'SO'
            },
            {
                id: 'South Africa', itemName: 'South Africa',
                'dial_code': '+27',
                'code': 'ZA'
            },
            {
                id: 'South Sudan', itemName: 'South Sudan',
                'dial_code': '+211',
                'code': 'SS'
            },
            {
                id: 'South Georgia and the South Sandwich Islands', itemName: 'South Georgia and the South Sandwich Islands',
                'dial_code': '+500',
                'code': 'GS'
            },
            {
                id: 'Spain', itemName: 'Spain',
                'dial_code': '+34',
                'code': 'ES'
            },
            {
                id: 'Sri Lanka', itemName: 'Sri Lanka',
                'dial_code': '+94',
                'code': 'LK'
            },
            {
                id: 'Sudan', itemName: 'Sudan',
                'dial_code': '+249',
                'code': 'SD'
            },
            {
                id: 'Suriname', itemName: 'Suriname',
                'dial_code': '+597',
                'code': 'SR'
            },
            {
                id: 'Svalbard and Jan Mayen', itemName: 'Svalbard and Jan Mayen',
                'dial_code': '+47',
                'code': 'SJ'
            },
            {
                id: 'Swaziland', itemName: 'Swaziland',
                'dial_code': '+268',
                'code': 'SZ'
            },
            {
                id: 'Sweden', itemName: 'Sweden',
                'dial_code': '+46',
                'code': 'SE'
            },
            {
                id: 'Switzerland', itemName: 'Switzerland',
                'dial_code': '+41',
                'code': 'CH'
            },
            {
                id: 'Syrian Arab Republic', itemName: 'Syrian Arab Republic',
                'dial_code': '+963',
                'code': 'SY'
            },
            {
                id: 'Taiwan', itemName: 'Taiwan',
                'dial_code': '+886',
                'code': 'TW'
            },
            {
                id: 'Tajikistan', itemName: 'Tajikistan',
                'dial_code': '+992',
                'code': 'TJ'
            },
            {
                id: 'Tanzania, United Republic of Tanzania', itemName: 'Tanzania, United Republic of Tanzania',
                'dial_code': '+255',
                'code': 'TZ'
            },
            {
                id: 'Thailand', itemName: 'Thailand',
                'dial_code': '+66',
                'code': 'TH'
            },
            {
                id: 'Timor-Leste', itemName: 'Timor-Leste',
                'dial_code': '+670',
                'code': 'TL'
            },
            {
                id: 'Togo', itemName: 'Togo',
                'dial_code': '+228',
                'code': 'TG'
            },
            {
                id: 'Tokelau', itemName: 'Tokelau',
                'dial_code': '+690',
                'code': 'TK'
            },
            {
                id: 'Tonga', itemName: 'Tonga',
                'dial_code': '+676',
                'code': 'TO'
            },
            {
                id: 'Trinidad and Tobago', itemName: 'Trinidad and Tobago',
                'dial_code': '+1868',
                'code': 'TT'
            },
            {
                id: 'Tunisia', itemName: 'Tunisia',
                'dial_code': '+216',
                'code': 'TN'
            },
            {
                id: 'Turkey', itemName: 'Turkey',
                'dial_code': '+90',
                'code': 'TR'
            },
            {
                id: 'Turkmenistan', itemName: 'Turkmenistan',
                'dial_code': '+993',
                'code': 'TM'
            },
            {
                id: 'Turks and Caicos Islands', itemName: 'Turks and Caicos Islands',
                'dial_code': '+1649',
                'code': 'TC'
            },
            {
                id: 'Tuvalu', itemName: 'Tuvalu',
                'dial_code': '+688',
                'code': 'TV'
            },
            {
                id: 'Uganda', itemName: 'Uganda',
                'dial_code': '+256',
                'code': 'UG'
            },
            {
                id: 'Ukraine', itemName: 'Ukraine',
                'dial_code': '+380',
                'code': 'UA'
            },
            {
                id: 'United Arab Emirates', itemName: 'United Arab Emirates',
                'dial_code': '+971',
                'code': 'AE'
            },
            {
                id: 'United Kingdom', itemName: 'United Kingdom',
                'dial_code': '+44',
                'code': 'GB'
            },
            {
                id: 'United States', itemName: 'United States',
                'dial_code': '+1',
                'code': 'US'
            },
            {
                id: 'Uruguay', itemName: 'Uruguay',
                'dial_code': '+598',
                'code': 'UY'
            },
            {
                id: 'Uzbekistan', itemName: 'Uzbekistan',
                'dial_code': '+998',
                'code': 'UZ'
            },
            {
                id: 'Vanuatu', itemName: 'Vanuatu',
                'dial_code': '+678',
                'code': 'VU'
            },
            {
                id: 'Venezuela, Bolivarian Republic of Venezuela', itemName: 'Venezuela, Bolivarian Republic of Venezuela',
                'dial_code': '+58',
                'code': 'VE'
            },
            {
                id: 'Vietnam', itemName: 'Vietnam',
                'dial_code': '+84',
                'code': 'VN'
            },
            {
                id: 'Virgin Islands, British', itemName: 'Virgin Islands, British',
                'dial_code': '+1284',
                'code': 'VG'
            },
            {
                id: 'Virgin Islands, U.S.', itemName: 'Virgin Islands, U.S.',
                'dial_code': '+1340',
                'code': 'VI'
            },
            {
                id: 'Wallis and Futuna', itemName: 'Wallis and Futuna',
                'dial_code': '+681',
                'code': 'WF'
            },
            {
                id: 'Yemen', itemName: 'Yemen',
                'dial_code': '+967',
                'code': 'YE'
            },
            {
                id: 'Zambia', itemName: 'Zambia',
                'dial_code': '+260',
                'code': 'ZM'
            },
            {
                id: 'Zimbabwe', itemName: 'Zimbabwe',
                'dial_code': '+263',
                'code': 'ZW'
            }
        ];

        return list;

    };
}

