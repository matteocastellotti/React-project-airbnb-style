import Immutable from 'immutable';
import { meAgencyConstants } from '../constants';
import { Agency } from '../data';

const initState = Immutable.fromJS({
    form: {
        currentValues: Agency(),
        validateErrors: Agency(),
        errorMessage: '',
        isSubmitting: '',
        loading: false
    }
});

const meAgencyRequest = (state, action) => {
    return state.set('loading', true);
}

const meAgencySuccess = (state, action) => {
    return state
        .setIn(['form', 'currentValues'], Immutable.fromJS(action.payload))
        .set('loading', false);
}

const meAgencyFailure = (state, action) => {
    return state
        .set('errorMessage', Immutable.fromJS(action.error))
        .set('loading', false);
}

const meAgencyUpdateRequest = (state, action) => {
    return state.set('loading', true);
}

const meAgencyUpdateSuccess = (state, action) => {
    return state
        .setIn(['form', 'currentValues'], Immutable.fromJS(action.payload))
        .set('loading', false);
}

const meAgencyUpdateFailure = (state, action) => {
    return state
        .set('errorMessage', action.payload)
        .set('loading', false);
}

const meAgencyFieldChanged = (state, action) => {
    return state.setIn(['form', 'currentValues', action.payload.fieldName], action.payload.newValue);
}

const meAgencyValidFormSubmitted = (state, action) => {
    return state.setIn(['form', 'validateErrors'], Immutable.fromJS(Agency()))
}

const meAgencyInvalidFormSubmitted = (state, action) => {
    return state.mergeIn(['form', 'validateErrors'], Immutable.fromJS(action.payload.errors));
}

export function MeAgency(state = initState, action) {
    switch (action.type) {
        case meAgencyConstants.ME_AGENCY_REQUEST:
            return meAgencyRequest(state, action);

        case meAgencyConstants.ME_AGENCY_SUCCESS:
            return meAgencySuccess(state, action);

        case meAgencyConstants.GET_ME_AGENCY_FAILURE:
            return meAgencyFailure(state, action);

        case meAgencyConstants.ME_AGENCY_UPDATE_REQUEST:
            return meAgencyUpdateRequest(state, action);

        case meAgencyConstants.ME_AGENCY_UPDATE_SUCCESS:
            return meAgencyUpdateSuccess(state, action);

        case meAgencyConstants.ME_AGENCY_UPDATE_FAILURE:
            return meAgencyUpdateFailure(state, action);

        case meAgencyConstants.ME_AGENCY_FIELD_CHANGED:
            return meAgencyFieldChanged(state, action);

        case meAgencyConstants.ME_AGENCY_VALID_FORM_SUBMITTED:
            return meAgencyValidFormSubmitted(state, action);

        case meAgencyConstants.ME_AGENCY_INVALID_FORM_SUBMITTED:
            return meAgencyInvalidFormSubmitted(state, action);

        default:
            return state
    }
}