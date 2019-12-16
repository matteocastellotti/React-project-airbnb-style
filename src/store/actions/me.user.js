import moment from 'moment';

import { meUserConstants } from '../constants';
import { meUserService } from '../services';

export const meUserActions = {
    get,
    insert,
    update,
    meUserFieldChanged,
    meUservalidFormSubmitted,
    meUserInvalidFormSubmitted
};

function get() {
    return dispatch => {
        dispatch(request());

        meUserService.get()
            .then(
                response => {
                    const bithDate = moment(response.birthDate);
                    response.birthdayDay = bithDate.date();
                    response.birthdayMonth = bithDate.month() + 1;
                    response.birthdayYear = bithDate.year();
                    dispatch(success(response))
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meUserConstants.ME_USER_REQUEST } }
    function success(response) { return { type: meUserConstants.ME_USER_SUCCESS, payload: response } }
    function failure(error) { return { type: meUserConstants.ME_USER_FAILURE, payload: error } }
};

function insert(req) {
    return dispatch => {
        dispatch(meUservalidFormSubmitted());
        dispatch(request());

        req.birthDate = moment().date(req.birthdayDay).month(req.birthdayMonth - 1).year(req.birthdayYear);

        meUserService.insert(req)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meUserConstants.ME_USER_INSERT_REQUEST } }
    function success(response) { return { type: meUserConstants.ME_USER_INSERT_SUCCESS, payload: response } }
    function failure(error) { return { type: meUserConstants.ME_USER_INSERT_FAILURE, payload: error } }
};

function update(req) {
    return dispatch => {
        dispatch(meUservalidFormSubmitted());
        dispatch(request());
        req.birthDate = moment().date(req.birthdayDay).month(req.birthdayMonth - 1).year(req.birthdayYear).toDate();
        
        meUserService.update(req)
            .then(
                response => {
                    if (response.birthDate) {
                        const birthDate = moment(response.birthDate);
                        response.birthdayDay = birthDate.date();
                        response.birthdayMonth = birthDate.month() + 1;
                        response.birthdayYear = birthDate.year();
                    }
                    dispatch(success(response))
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meUserConstants.ME_USER_UPDATE_REQUEST } }
    function success(response) { return { type: meUserConstants.ME_USER_UPDATE_SUCCESS, payload: response } }
    function failure(error) { return { type: meUserConstants.ME_USER_UPDATE_FAILURE, payload: error } }
};

function meUserFieldChanged(fieldName, newValue) {
    return {
        type: meUserConstants.ME_USER_FIELD_CHANGED,
        payload: {
            fieldName: fieldName,
            newValue: newValue
        }
    }
}

function meUservalidFormSubmitted() { 
    return { 
        type: meUserConstants.ME_USER_VALID_FORM_SUBMITTED
    }
}

function meUserInvalidFormSubmitted(errors) {
    return {
        type: meUserConstants.ME_USER_INVALID_FORM_SUBMITTED,
        payload: {
            errors: errors
        }
    }
};
