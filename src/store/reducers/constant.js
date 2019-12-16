import { constantConstants } from '../constants';
import { updateObject } from '../../helpers/utility';

const initState = {
    constants: null
}

const constantRequest = (state, action) => {
    return state;
}

const constantSuccess = (state, action) => {
    return updateObject(state, {constants: action.response});
}

const constantFailure = (state, action) => {
    return updateObject(state, {error: action.error, constants: null});
}

export function Constant(state = initState, action) {
    switch (action.type) {
        case constantConstants.CONSTANT_REQUEST:
            return constantRequest(state, action);

        case constantConstants.CONSTANT_SUCCESS:
            return constantSuccess(state, action);

        case constantConstants.CONSTANT_FAILURE:
            return constantFailure(state, action);
            
        default:
            return state;
    }
}