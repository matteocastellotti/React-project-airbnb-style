import { territoryConstants } from '../constants';
import { territoryService } from '../services';

export const territoryActions = {
    search,
    searchCountry,
    searchProvince,
    searchRegion,
    searchTown
};

function search(searchFilters) {
    return dispatch => {
        dispatch(request());

        territoryService.search(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: territoryConstants.TERRITORY_REQUEST } }
    function success(response) { return { type: territoryConstants.TERRITORY_SUCCESS, payload: response } }
    function failure(error) { return { type: territoryConstants.TERRITORY_FAILURE, payload: error } }
};

function searchCountry(searchFilters) {
    return dispatch => {
        dispatch(request());

        territoryService.searchCountry(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: territoryConstants.TERRITORY_COUNTRY_REQUEST } }
    function success(response) { return { type: territoryConstants.TERRITORY_COUNTRY_SUCCESS, payload: response } }
    function failure(error) { return { type: territoryConstants.TERRITORY_COUNTRY_FAILURE, payload: error } }
};

function searchProvince(searchFilters) {
    return dispatch => {
        dispatch(request());

        territoryService.searchProvince(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: territoryConstants.TERRITORY_PROVINCE_REQUEST } }
    function success(response) { return { type: territoryConstants.TERRITORY_PROVINCE_SUCCESS, payload: response } }
    function failure(error) { return { type: territoryConstants.TERRITORY_PROVINCE_FAILURE, payload: error } }
};

function searchRegion(searchFilters) {
    return dispatch => {
        dispatch(request());

        territoryService.searchRegion(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: territoryConstants.TERRITORY_REGION_REQUEST } }
    function success(response) { return { type: territoryConstants.TERRITORY_REGION_SUCCESS, payload: response } }
    function failure(error) { return { type: territoryConstants.TERRITORY_REGION_FAILURE, payload: error } }
};

function searchTown(searchFilters) {
    return dispatch => {
        dispatch(request());

        territoryService.searchTown(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: territoryConstants.TERRITORY_TOWN_REQUEST } }
    function success(response) { return { type: territoryConstants.TERRITORY_TOWN_SUCCESS, payload: response } }
    function failure(error) { return { type: territoryConstants.TERRITORY_TOWN_FAILURE, payload: error } }
};