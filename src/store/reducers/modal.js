import Immutable from 'immutable';
import { modalConstants } from '../constants';

const initState = new Immutable.fromJS({
    visibleModal: 'NO_MODAL'
});

const authModalOpened = (state, action) => {
    return state.set('visibleModal', 'LOGIN_MODAL');
}

const signupModalOpened = (state, action) => {
    return state.set('visibleModal', 'SIGNUP_MODAL');
}

const modalClosed = (state, action) => {
    return state.set('visibleModal', 'NO_MODAL');
}

export function Modal(state = initState, action) {
    switch (action.type) {
        case modalConstants.AUTH_MODAL_OPENED:
            return authModalOpened(state, action);

        case modalConstants.SIGNUP_MODAL_OPENED:
            return signupModalOpened(state, action);

        case modalConstants.MODAL_CLOSED:
            return modalClosed(state, action);
            
        default:
            return state;
    }
}