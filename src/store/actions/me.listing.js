import { meListingConstants } from '../constants';
import { meListingService } from '../services';

export const meListingActions = {
    hydrate,
    get,
    getAllComplete,
    insert,
    update,
    updateType,
    remove,
    meListingFieldChanged,
    meListingValidFormSubmitted,
    meListingInvalidFormSubmitted
};

function hydrate() {
    return {
        type: meListingConstants.ME_LISTING_HYDRATE
    }
}

function get(id) {
    return dispatch => {
        dispatch(request());

        meListingService.get(id)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_FAILURE, payload: error } }
};

function getAllComplete() {
    return dispatch => {
        dispatch(request());

        meListingService.getAllComplete()
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTINGS_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTINGS_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTINGS_FAILURE, payload: error } }
};

function insert(req) {
    return dispatch => {
        dispatch(request());

        meListingService.insert(req)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_INSERT_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_INSERT_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_INSERT_FAILURE, payload: error } }
};

function update(id, req) {
    return dispatch => {
        dispatch(request());

        meListingService.update(id, req)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_UPDATE_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_UPDATE_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_UPDATE_FAILURE, payload: error } }
};

function updateType(id, req) {
    return dispatch => {
        dispatch(request());

        meListingService.updateType(id, req)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_UPDATE_TYPE_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_UPDATE_TYPE_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_UPDATE_TYPE_FAILURE, payload: error } }
};

function remove(id) {
    return dispatch => {
        dispatch(request());

        meListingService.remove(id)
            .then(
                response => dispatch(success(response)),
                text => dispatch(getAllComplete()),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_DELETE_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_DELETE_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_DELETE_FAILURE, payload: error } }
};

function meListingFieldChanged(fieldName, newValue) {
    return {
        type: meListingConstants.ME_LISTING_FIELD_CHANGED,
        payload: {
            fieldName: fieldName,
            newValue: newValue
        }
    }
}

function meListingValidFormSubmitted() {
    return {
        type: meListingConstants.ME_LISTING_VALID_FORM_SUBMITTED
    }
};

function meListingInvalidFormSubmitted(entity, errors) {
    return {
        type: meListingConstants.ME_LISTING_INVALID_FORM_SUBMITTED,
        payload: {
            entity: entity,
            errors: errors
        }
    }
};