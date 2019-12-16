import { modalConstants } from '../constants';

export const modalActions = {
    authModalOpened,
    signupModalOpened,
    modalClosed
};

function authModalOpened() {
    return {
        type: modalConstants.AUTH_MODAL_OPENED
    };
}

function signupModalOpened() {
    return {
        type: modalConstants.SIGNUP_MODAL_OPENED
    };
}

function modalClosed() {
    return {
        type: modalConstants.MODAL_CLOSED
    }
}