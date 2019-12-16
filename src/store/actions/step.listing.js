import { meListingConstants } from '../constants';
import { meListingService } from '../services';
import { meListingActions } from './';
import { history } from '../history';

export const stepListingActions = {
    insert,
    updateOwner,
    updateType,
    updatePlace,
    updateDetails,
    updateComforts
};


function insert(req) {
    return dispatch => {
        dispatch(meListingActions.meListingValidFormSubmitted());
        dispatch(request());

        meListingService.insert(req)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/new-listing/' + response.id + '/type');
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_INSERT_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_INSERT_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_INSERT_FAILURE, payload: error } }
};

function updateOwner(id, req) {
    return dispatch => {
        dispatch(meListingActions.meListingValidFormSubmitted());
        dispatch(request());

        meListingService.updateOwner(id, req)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/new-listing/' + response.id + '/type');
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_UPDATE_OWNER_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_UPDATE_OWNER_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_UPDATE_OWNER_FAILURE, payload: error } }
};

function updateType(id, req) {
    return dispatch => {
        dispatch(meListingActions.meListingValidFormSubmitted());
        dispatch(request());

        meListingService.updateType(id, req)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/new-listing/' + response.id + '/place');
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_UPDATE_TYPE_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_UPDATE_TYPE_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_UPDATE_TYPE_FAILURE, payload: error } }
};

function updatePlace(id, req) {
    return dispatch => {
        dispatch(meListingActions.meListingValidFormSubmitted());
        dispatch(request());

        meListingService.updatePlace(id, req)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/new-listing/' + response.id + '/details');
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_UPDATE_PLACE_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_UPDATE_PLACE_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_UPDATE_PLACE_FAILURE, payload: error } }
};

function updateDetails(id, req) {
    return dispatch => {
        dispatch(meListingActions.meListingValidFormSubmitted());
        dispatch(request());

        meListingService.updateDetails(id, req)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/new-listing/' + response.id + "/comforts");
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_UPDATE_DETAILS_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_UPDATE_DETAILS_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_UPDATE_DETAILS_FAILURE, payload: error } }
};

function updateComforts(id, req) {
    return dispatch => {
        dispatch(meListingActions.meListingValidFormSubmitted());
        dispatch(request());

        meListingService.updateComforts(id, req)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/new-listing/' + response.id);
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: meListingConstants.ME_LISTING_UPDATE_COMFORTS_REQUEST } }
    function success(response) { return { type: meListingConstants.ME_LISTING_UPDATE_COMFORTS_SUCCESS, payload: response } }
    function failure(error) { return { type: meListingConstants.ME_LISTING_UPDATE_COMFORTS_FAILURE, payload: error } }
};