import { headerConstants } from '../constants';
import { meUserService, meListingService, territoryService } from '../services';

export const headerActions = {
    headerNavigationItemSelect,
    headerNavigationItemDeselect,
    headerFlyoutMenuToggle,
    headerUserLogin,
    headerUserCountListings,
    searchCities
};

function headerNavigationItemSelect(navigationItemSelect) {
    return {
        type: headerConstants.HEADER_NAVIGATION_ITEM_SELECT,
        payload: navigationItemSelect
    };
}

function headerNavigationItemDeselect() {
    return {
        type: headerConstants.HEADER_NAVIGATION_ITEM_DESELECT,
    };
}

function headerFlyoutMenuToggle() {
    return {
        type: headerConstants.HEADER_FLYOUT_MENU_TOGGLE
    };
}

function headerUserLogin() {
    return dispatch => {
        dispatch(request());

        meUserService.get()
            .then(
                response => {
                    dispatch(success(response));
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: headerConstants.HEADER_USER_LOGIN_REQUEST } }
    function success(response) { 
        let agency = null;
        if (response.agency) {
            agency = {
                id: response.agency.id,
                businessName: response.agency.businessName
            }
        }
        return { 
            type: headerConstants.HEADER_USER_LOGIN_SUCCESS, 
            payload: {
                loggedUser: {
                    id: response.id,
                    firstName: response.firstName,
                    lastName: response.lastName
                },
                agency: agency
            }
        }
    }
    function failure(error) { return { type: headerConstants.HEADER_USER_LOGIN_FAILURE, payload: error } }
}

function headerUserCountListings() {
    return dispatch => {
        dispatch(request());

        meListingService.countAll()
            .then(
                response => {
                    dispatch(success(response));
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: headerConstants.HEADER_USER_COUNT_LISTINGS_REQUEST } }
    function success(response) { return { type: headerConstants.HEADER_USER_COUNT_LISTINGS_SUCCESS, payload: response } }
    function failure(error) { return { type: headerConstants.HEADER_USER_COUNT_LISTINGS_FAILURE, payload: error } }
}

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

    function request() { return { type: headerConstants.SEARCH_CITY_REQUEST } }
    function success(response) { return { type: headerConstants.SEARCH_CITY_SUCCESS, payload: response } }
    function failure(error) { return { type: headerConstants.SEARCH_CITY_FAILURE, payload: error } }
}