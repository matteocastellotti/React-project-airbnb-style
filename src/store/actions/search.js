import { searchConstants } from '../constants';
import { listingService, territoryService } from '../services';

export const searchActions = {
    searchListings,
    searchCities,
    filtersChanged
};

function searchListings(searchFilters) {
    return dispatch => {
        dispatch(request());

        listingService.search(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: searchConstants.SEARCH_LISTING_REQUEST } }
    function success(response) { return { type: searchConstants.SEARCH_LISTING_SUCCESS, payload: response } }
    function failure(error) { return { type: searchConstants.SEARCH_LISTING_FAILURE, payload: error } }
};

function searchCities(name) {
    let searchFilters = {
        filters: {
            NAME_RIGHT_LIKE: name
        },
        size: 5
    }
    return dispatch => {
        dispatch(request());

        territoryService.searchTown(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: searchConstants.SEARCH_CITY_REQUEST } }
    function success(response) { return { type: searchConstants.SEARCH_CITY_SUCCESS, payload: response } }
    function failure(error) { return { type: searchConstants.SEARCH_CITY_FAILURE, payload: error } }
}

function filtersChanged(id, value) {
    return {
        type: searchConstants.FILTERS_CHANGED,
        payload: {
            id: id,
            value: value
        }
    }
}