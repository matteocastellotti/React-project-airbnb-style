import Immutable from 'immutable';
import { countryConstants } from '../constants';

const initState = Immutable.fromJS({
    countries: [],
    loading: false,
    errors: ''
});

const contactRequest = (state, action) => {
    return state.set('loading', true);
}

const countrySuccess = (state, action) => {
    return state
        .set('countries', action.payload)
        .set('loading', false);
}

const countryFailure = (state, action) => {
    return state
        .set('errors',  action.payload.error)
        .set('loading', false);
}

export function Country(state = initState, action) {
    switch (action.type) {
        case countryConstants.COUNTRY_REQUEST:
            return contactRequest(state, action);

        case countryConstants.COUNTRY_SUCCESS:
            return countrySuccess(state, action);

        case countryConstants.COUNTRY_FAILURE:
            return countryFailure(state, action);

        default:
            return state;
    }
}