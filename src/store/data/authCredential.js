import { Record } from 'immutable';

export const AuthCredential = new Record({
    email: '',
    password: '',
    rememberMe: false
});