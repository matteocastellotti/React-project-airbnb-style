import { authenticationConstants } from '../constants';
import { authenticationService,  } from '../services';
import { headerActions, modalActions } from './';
import { setToken } from '../../helpers/utility';

export const authenticationActions = {
    login,
    loginShowPassword,
    loginFieldChanged,
    loginInvalidFormSubmitted
};

function login(req) {
    return dispatch => {
        dispatch(request());

        authenticationService.login(req.email, req.password)
            .then(
                response => {
                    setToken(req.rememberMe, response.headers['_token']);
                    dispatch(success(response));
                    dispatch(headerActions.headerUserLogin());
                    dispatch(headerActions.headerUserCountListings());
                    dispatch(modalActions.modalClosed());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: authenticationConstants.LOGIN_REQUEST } }
    function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
}

function loginShowPassword() {
    return {
        type: authenticationConstants.LOGIN_SHOW_PASSWORD
    }
}

function loginFieldChanged(fieldName, newValue) {
    return {
        type: authenticationConstants.LOGIN_FIELD_CHANGED,
        payload: {
            fieldName: fieldName,
            newValue: newValue
        }
    }
}

function loginInvalidFormSubmitted(errors) {
    return {
        type: authenticationConstants.LOGIN_INVALID_FORM_SUBMITTED,
        payload: {
            errors: errors
        }
    }
}

export default authenticationActions;