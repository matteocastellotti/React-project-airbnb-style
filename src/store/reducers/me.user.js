import Immutable from 'immutable';
import { meUserConstants } from '../constants';
import { User } from '../data';

const initState = new Immutable.fromJS({
    form: {
        currentValues: User(),
        validateErrors: User(),
        errorMessage: '',
        isSubmitting: '',
        loading: false
    }
});

const meUserRequest = (state, action) => {
    return state.set('loading', true);
}

const meUserSuccess = (state, action) => {
    return state
        .setIn(['form', 'currentValues'], Immutable.fromJS(action.payload))
        .set('loading', false);
}

const meUserFailure = (state, action) => {
    return state
        .set('errorMessage', Immutable.fromJS(action.error))
        .set('loading', false);
}

const meUserUpdateRequest = (state, action) => {
    return state.set('loading', true);
}

const meUserUpdateSuccess = (state, action) => {
    return state
        .setIn(['form', 'currentValues'], Immutable.fromJS(action.payload))
        .set('loading', false);
}

const meUserUpdateFailure = (state, action) => {
    return state
        .set('errorMessage', action.payload)
        .set('loading', false);
}

const meUserFieldChanged = (state, action) => {
    return state.setIn(['form', 'currentValues', action.payload.fieldName], action.payload.newValue);
}

const meUserValidFormSubmitted = (state, action) => {
    return state.setIn(['form', 'validateErrors'], Immutable.fromJS(User()))
}

const meUserInvalidFormSubmitted = (state, action) => {
    return state.mergeIn(['form', 'validateErrors'], Immutable.fromJS(action.payload.errors));
}

export function Me(state = initState, action) {
    switch (action.type) {
        case meUserConstants.ME_USER_REQUEST:
            return meUserRequest(state, action);

        case meUserConstants.ME_USER_SUCCESS:
            return meUserSuccess(state, action);

        case meUserConstants.ME_USER_FAILURE:
            return meUserFailure(state, action);

        case meUserConstants.ME_USER_UPDATE_REQUEST:
            return meUserUpdateRequest(state, action);

        case meUserConstants.ME_USER_UPDATE_SUCCESS:
            return meUserUpdateSuccess(state, action);

        case meUserConstants.ME_USER_UPDATE_FAILURE:
            return meUserUpdateFailure(state, action);

        case meUserConstants.ME_USER_FIELD_CHANGED:
            return meUserFieldChanged(state, action);

        case meUserConstants.ME_USER_VALID_FORM_SUBMITTED:
            return meUserValidFormSubmitted(state, action);

        case meUserConstants.ME_USER_INVALID_FORM_SUBMITTED:
            return meUserInvalidFormSubmitted(state, action);

        default:
            return state
    }
}