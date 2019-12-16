import moment from 'moment';

import { signupConstants } from '../constants';
import { meUserService } from '../services';
import {authenticationActions } from './'

export const signupActions = {
    signup,
    signupFieldChanged,
    signupInvalidFormSubmitted
};

function signup(req) {
    return dispatch => {
        dispatch(request());

        req.birthDate = moment().date(req.birthdayDay).month(req.birthdayMonth - 1).year(req.birthdayYear);

        meUserService.insert(req)
            .then(
                response => {
                    dispatch(success(response));
                    dispatch(authenticationActions.login({
                        email: response.email, 
                        password: req.password
                    }));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: signupConstants.SIGNUP_REQUEST } }
    function success(response) { return { type: signupConstants.SIGNUP_SUCCESS, payload: response } }
    function failure(error) { return { type: signupConstants.SIGNUP_FAILURE, payload: error } }
}

function signupFieldChanged(fieldName, newValue) {
    return {
        type: signupConstants.SIGNUP_FIELD_CHANGED,
        payload: {
            fieldName: fieldName,
            newValue: newValue
        }
    }
}

function signupInvalidFormSubmitted(errors) {
    return {
        type: signupConstants.SIGNUP_INVALID_FORM_SUBMITTED,
        payload: {
            errors: errors
        }
    }
}