import { Record } from 'immutable';
import { User } from './';

export const Agency = new Record({
    id: '',
    businessName: '',
    description: '',
    vatNumber: '',
    owner: User(),
    email: '',
    phoneNumberDialCode: '',
    phoneNumber: '',
    faxNumber: '',
    mobilePhoneNumberDialCode: '',
    mobilePhoneNumber: '',
    country: '',
    state: '',
    city: '',
    street: '',
    zipCode: '',
    webSite: ''
});