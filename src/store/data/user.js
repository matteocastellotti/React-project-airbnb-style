import { Record } from 'immutable';

export const User = new Record({
    id: '',
    firstName: '',
    lastName: '',
    password: '',
    sex: '',
    birthDate: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
    language: '',
    email: '',
    phoneNumber: '',
    faxNumber: '',
    mobilePhoneNumber: '',
    city: '',
    verify: '',
    receivePromotionalEmail: ''
});