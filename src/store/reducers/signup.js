import Immutable from 'immutable';
import { signupConstants } from '../constants';
import { User } from '../data';

const initState = Immutable.fromJS({
  form: {
    currentValues: User(),
    validateErrors: User(),
    loading: false,
    errorMessage: '',
    isSubmitting: ''
  }
});

const signupRequest = (state, action) => {
  return state.set('loading', true);
}

const signupSuccess = (state, action) => {
  return state
    .mergeIn(['form', 'currentValues'], Immutable.fromJS(action.payload))
    .set('loading', true);
}

const signupFailure = (state, action) => {
  return state
    .set('errorMessage', Immutable.fromJS(action.error))
    .set('loading', false);
}

const signupFieldChanged = (state, action) => {
  return state.setIn(['form', 'currentValues', action.payload.fieldName], action.payload.newValue);
}

const signupInvalidFormSubmitted = (state, action) => {
  return state.setIn(['form', 'validateErrors'], Immutable.fromJS(User()))
}

export function Signup(state = initState, action) {
  switch (action.type) {
    case signupConstants.SIGNUP_REQUEST:
      return signupRequest(state, action);

    case signupConstants.SIGNUP_SUCCESS:
      return signupSuccess(state, action);

    case signupConstants.SIGNUP_FAILURE:
      return signupFailure(state, action);

    case signupConstants.SIGNUP_FIELD_CHANGED:
      return signupFieldChanged(state, action);

    case signupConstants.SIGNUP_INVALID_FORM_SUBMITTED:
      return signupInvalidFormSubmitted(state, action);

    default:
      return state
  }
}