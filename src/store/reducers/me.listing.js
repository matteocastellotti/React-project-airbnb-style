import Immutable from 'immutable';
import { meListingConstants } from '../constants';
import { Listing } from '../data';

const initState = Immutable.fromJS({
    form: {
        currentValues: Listing(),
        validateErrors: Listing(),
    },
    completes: null,
    incompletes: null,
    errorMessage: '',
    loading: false,
    isSubmitting: false
});

const meListingHydrate = (state, action) => {
    return state = initState;
}

const meListingRequest = (state, action) => {
    return state.set('loading', true);
}

const meListingSuccess = (state, action) => {
    return state
        .setIn(['form','currentValues'], Immutable.fromJS(state.toJS().form.currentValues).mergeDeep(Immutable.fromJS(action.payload)))
        .set('loading', false);
}

const meListingFailure = (state, action) => {
    return state
        .set('errorMessage', Immutable.fromJS(action.error))
        .set('loading', false);
}

const meListingsRequest = (state, action) => {
    return state.set('loading', true);
}

const meListingsSuccess = (state, action) => {
    return state
        .set('completes', action.payload)
        .set('loading', false);
}

const meListingsFailure = (state, action) => {
    return state
        .set('errorMessage', Immutable.fromJS(action.error))
        .set('loading', false);
}

const meListingInsertRequest = (state, action) => {
    return state.set('loading', true);
}

const meListingInsertSuccess = (state, action) => {
    return state
        .mergeIn(['form', 'currentValues'], Immutable.fromJS(action.payload))
        .set('loading', false);
}

const meListingInsertFailure = (state, action) => {
    return state
        .set('errorMessage', action.payload)
        .set('loading', false);
}

const meListingUpdateRequest = (state, action) => {
    return state.set('loading', true);
}

const meListingUpdateSuccess = (state, action) => {
    return state
        .mergeIn(['form', 'currentValues'], Immutable.fromJS(action.payload))
        .set('loading', false);
}

const meListingUpdateFailure = (state, action) => {
    return state
        .set('errorMessage', action.payload)
        .set('loading', false);
}

const meListingFieldChanged = (state, action) => {
    return state
        .setIn(['form', 'currentValues'].concat(action.payload.fieldName.split('.')), action.payload.newValue);
}

const meListingValidFormSubmitted = (state, action) => {
    return state.setIn(['form', 'validateErrors'], Immutable.fromJS(Listing()))
}

const meListingInvalidFormSubmitted = (state, action) => {
    return state
        .setIn(['form', 'validateErrors'], Immutable.fromJS(Listing()))
        .mergeIn(['form', 'validateErrors'].concat(action.payload.entity.split('.')), action.payload.errors);
}

export function MeListing(state = initState, action) {
    switch (action.type) {
        case meListingConstants.ME_LISTING_HYDRATE:
            return meListingHydrate(state, action);

        case meListingConstants.ME_LISTING_REQUEST:
            return meListingRequest(state, action);

        case meListingConstants.ME_LISTING_SUCCESS:
            return meListingSuccess(state, action);

        case meListingConstants.GET_ME_LISTING_FAILURE:
            return meListingFailure(state, action);

        case meListingConstants.ME_LISTINGS_REQUEST:
            return meListingsRequest(state, action);
        
        case meListingConstants.ME_LISTINGS_SUCCESS:
            return meListingsSuccess(state, action);

        case meListingConstants.ME_LISTINGS_FAILURE:
            return meListingsFailure(state, action);

        case meListingConstants.ME_LISTING_INSERT_REQUEST:
            return meListingInsertRequest(state, action);

        case meListingConstants.ME_LISTING_INSERT_SUCCESS:
            return meListingInsertSuccess(state, action);

        case meListingConstants.ME_LISTING_INSERT_FAILURE:
            return meListingInsertFailure(state, action);
                
        case meListingConstants.ME_LISTING_UPDATE_REQUEST:
            return meListingUpdateRequest(state, action);

        case meListingConstants.ME_LISTING_UPDATE_SUCCESS:
            return meListingUpdateSuccess(state, action);

        case meListingConstants.ME_LISTING_UPDATE_FAILURE:
            return meListingUpdateFailure(state, action);

        case meListingConstants.ME_LISTING_UPDATE_OWNER_REQUEST:
            return meListingUpdateRequest(state, action);

        case meListingConstants.ME_LISTING_UPDATE_OWNER_SUCCESS:
            return meListingUpdateSuccess(state, action);

        case meListingConstants.ME_LISTING_UPDATE_OWNER_FAILURE:
            return meListingUpdateFailure(state, action);

        case meListingConstants.ME_LISTING_UPDATE_TYPE_REQUEST:
            return meListingUpdateRequest(state, action);

        case meListingConstants.ME_LISTING_UPDATE_TYPE_SUCCESS:
            return meListingUpdateSuccess(state, action);

        case meListingConstants.ME_LISTING_UPDATE_TYPE_FAILURE:
            return meListingUpdateFailure(state, action);

        case meListingConstants.ME_LISTING_UPDATE_PLACE_REQUEST:
            return meListingUpdateRequest(state, action);

        case meListingConstants.ME_LISTING_UPDATE_PLACE_SUCCESS:
            return meListingUpdateSuccess(state, action);

        case meListingConstants.ME_LISTING_UPDATE_PLACE_FAILURE:
            return meListingUpdateFailure(state, action);

        case meListingConstants.ME_LISTING_UPDATE_DETAILS_REQUEST:
            return meListingUpdateRequest(state, action);

        case meListingConstants.ME_LISTING_UPDATE_DETAILS_SUCCESS:
            return meListingUpdateSuccess(state, action);

        case meListingConstants.ME_LISTING_UPDATE_DETAILS_FAILURE:
            return meListingUpdateFailure(state, action);

        case meListingConstants.ME_LISTING_FIELD_CHANGED:
            return meListingFieldChanged(state, action);

        case meListingConstants.ME_LISTING_VALID_FORM_SUBMITTED:
            return meListingValidFormSubmitted(state, action);

        case meListingConstants.ME_LISTING_INVALID_FORM_SUBMITTED:
            return meListingInvalidFormSubmitted(state, action);

        default:
            return state;
    }
};