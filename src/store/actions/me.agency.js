import { meAgencyConstants } from '../constants';
import { meAgencyService } from '../services';

export const meAgencyActions = {
    get,
    insert,
    update,
    meAgencyFieldChanged,
    meAgencyValidFormSubmitted,
    meAgencyInvalidFormSubmitted
};

function get() {
    return dispatch => {
        dispatch(request());

        meAgencyService.get()
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meAgencyConstants.ME_AGENCY_REQUEST } }
    function success(response) { return { type: meAgencyConstants.ME_AGENCY_SUCCESS, payload: response } }
    function failure(error) { return { type: meAgencyConstants.ME_AGENCY_FAILURE, payload: error } }
};

function insert(req) {
    return dispatch => {
        dispatch(meAgencyValidFormSubmitted());
        dispatch(request());

        meAgencyService.insert(req)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meAgencyConstants.ME_AGENCY_INSERT_REQUEST } }
    function success(response) { return { type: meAgencyConstants.ME_AGENCY_INSERT_SUCCESS, payload: response } }
    function failure(error) { return { type: meAgencyConstants.ME_AGENCY_INSERT_FAILURE, payload: error } }
};

function update(req) {
    return dispatch => {
        dispatch(meAgencyValidFormSubmitted());
        dispatch(request());

        meAgencyService.update(req)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meAgencyConstants.ME_AGENCY_UPDATE_REQUEST } }
    function success(response) { return { type: meAgencyConstants.ME_AGENCY_UPDATE_SUCCESS, payload: response } }
    function failure(error) { return { type: meAgencyConstants.ME_AGENCY_UPDATE_FAILURE, payload: error } }
};

function meAgencyFieldChanged(fieldName, newValue) {
    return {
        type: meAgencyConstants.ME_AGENCY_FIELD_CHANGED,
        payload: {
            fieldName: fieldName,
            newValue: newValue
        }
    }
}

function meAgencyValidFormSubmitted() { 
    return { 
        type: meAgencyConstants.ME_AGENCY_VALID_FORM_SUBMITTED 
    }
}

function meAgencyInvalidFormSubmitted(errors) {
    return {
        type: meAgencyConstants.ME_AGENCY_INVALID_FORM_SUBMITTED,
        payload: {
            errors: errors
        }
    }
};