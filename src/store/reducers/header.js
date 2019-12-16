import Immutable from 'immutable';
import { headerConstants } from '../constants';
import { getToken } from '../../helpers/utility';

const initState = Immutable.fromJS({
    isLoggedIn: (getToken() ? true : false),
    isPrivate: true,
    loggedUser: {
        id: '',
        name: '',
        lastName: ''
    },
    agency : {
        id: '',
        businessName: ''
    },
    listings: false,
    activateNavigationItem: null,
    flyoutMenuToggle: false,
    cities: {
        results: [],
        isLoading: false,
        errorMessage: null
    }
});

const headerNavigationItemSelect = (state, action) => {
    if (state.toJS().activateNavigationItem === action.payload) {
        return state.set('activateNavigationItem', null);
    } else {
        return state.set('activateNavigationItem', action.payload);
    }
}

const headerNavigationItemDeselect = (state, action) => {
    return state.set('activateNavigationItem', null);
}

const headerFlyoutMenuToggle = (state, action) => {
    return state.set('flyoutMenuToggle', !state.toJS().flyoutMenuToggle);
}

const headerUserLoginRequest = (state, action) => {
    return state;
}

const headerUserLoginSuccess = (state, action) => {
    return state
        .set('isLoggedIn', (getToken() ? true : false))
        .set('isPrivate', action.payload.agency == null ? true : false)
        .set('loggedUser', action.payload.loggedUser)
        .set('agency', action.payload.agency);
}

const headerUserLoginFailure = (state, action) => {
    return state
        .set('isLoggedIn', false)
        .set('loggedUser', initState.loggedUser)
        .set('listings', false)
        .set('agency', initState.agency);
}

const headerUserCountListingsRequest = (state, action) => {
    return state;
}

const headerUserCountListingsSuccess = (state, action) => {
    return state
        .set("listings", action.payload > 0);
}

const headerUserCountListingsFailure = (state, action) => {
    return state
        .set("listings", false);
}

const searchCityRequest = (state, action) => {
    return state
        .setIn(['cities', 'results'], [])
        .setIn(['cities', 'isLoading'], true)
        .setIn(['cities', 'errorMessage'], null);
}

const searchCitySuccess = (state, action) => {
    return  state
        .setIn(['cities', 'results'], action.payload)
        .setIn(['cities', 'isLoading'], false);
}

const searchCityFailure = (state, action) => {
    return state
        .setIn(['cities', 'results'], [])
        .setIn(['cities', 'errorMessage'], action.error)
        .setIn(['cities', 'isLoading'], false);
}

export function Header(state = initState, action) {
    switch (action.type) {
        case headerConstants.HEADER_NAVIGATION_ITEM_SELECT:
            return headerNavigationItemSelect(state, action);

        case headerConstants.HEADER_NAVIGATION_ITEM_DESELECT:
            return headerNavigationItemDeselect(state, action);

        case headerConstants.HEADER_FLYOUT_MENU_TOGGLE:
            return headerFlyoutMenuToggle(state, action);

        case headerConstants.HEADER_USER_LOGIN_REQUEST:
            return headerUserLoginRequest(state, action);

        case headerConstants.HEADER_USER_LOGIN_SUCCESS:
            return headerUserLoginSuccess(state, action);

        case headerConstants.HEADER_USER_LOGIN_FAILURE:
            return headerUserLoginFailure(state, action);

        case headerConstants.HEADER_USER_COUNT_LISTINGS_REQUEST:
            return headerUserCountListingsRequest(state, action);

        case headerConstants.HEADER_USER_COUNT_LISTINGS_SUCCESS:
            return headerUserCountListingsSuccess(state, action);

        case headerConstants.HEADER_USER_COUNT_LISTINGS_FAILURE:
            return headerUserCountListingsFailure(state, action);

        case headerConstants.SEARCH_CITY_REQUEST:
            return searchCityRequest(state, action);
    
        case headerConstants.SEARCH_CITY_SUCCESS:
            return searchCitySuccess(state, action);
        
        case headerConstants.SEARCH_CITY_FAILURE:
            return searchCityFailure(state, action);

        default:
            return state;
    }
}