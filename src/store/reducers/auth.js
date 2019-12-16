import Immutable from 'immutable';
import { authenticationConstants } from '../constants';
import { AuthCredential } from '../data';

const initState = Immutable.fromJS({
    form: {
        currentValues: AuthCredential(),
        validateErrors: AuthCredential(),
        errorMessage: '',
        isSubmitting: false
    },
    showPassword: false
});

const loginRequest = (state, action) => {
    return state.set('loggedIn', true);
}

const loginSucces = (state, action) => {
    return state.set('loggedIn', true);
}

const loginFailure = (state, action) => {
    return state.set('errorMessage', action.error.response.data);
}

const logoutRequest = (state, action) => {
    return state;
}

const logoutSuccess = (state, action) => {
    return state;
}

const logoutFailure = (state, action) => {
    return state;
}

const loginShowPassword = (state, action) => {
    return state.set('showPassword', !state.toJS().showPassword);
}

const loginFieldChanged = (state, action) => {
    return state.setIn(['form', 'currentValues'].concat(action.payload.fieldName.split('.')), action.payload.newValue);
}

const loginInvalidFormSubmitted = (state, action) => {
    return state
        .setIn(['form', 'validateErrors'], Immutable.fromJS(AuthCredential()))
        .mergeIn(['form', 'validateErrors'].concat(action.payload.entity.split('.')), action.payload.errors);
}

export function Auth(state = initState, action) {
    switch (action.type) {
        case authenticationConstants.LOGIN_REQUEST:
            return loginRequest(state, action);

        case authenticationConstants.LOGIN_SUCCESS:
            return loginSucces(state, action);

        case authenticationConstants.LOGIN_FAILURE:
            return loginFailure(state, action);

        case authenticationConstants.LOGOUT_REQUEST:
            return logoutRequest(state, action);

        case authenticationConstants.LOGOUT_SUCCESS:
            return logoutSuccess(state, action);

        case authenticationConstants.LOGOUT_FAILURE:
            return logoutFailure(state, action);

        case authenticationConstants.LOGIN_SHOW_PASSWORD:
            return loginShowPassword(state, action);

        case authenticationConstants.LOGIN_FIELD_CHANGED:
            return loginFieldChanged(state, action);

        case authenticationConstants.LOGIN_INVALID_FORM_SUBMITTED:
            return loginInvalidFormSubmitted(state, action);

        default:
            return state
    }
}