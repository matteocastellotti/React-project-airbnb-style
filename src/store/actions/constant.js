import { constantConstants } from '../constants';
import { constantService } from '../services';

export const constantActions = {
    get
};

function get() {
    return dispatch => {
        dispatch(request());

        constantService.get()
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: constantConstants.CONSTANT_REQUEST } }
    function success(response) { return { type: constantConstants.CONSTANT_SUCCESS, response } }
    function failure(error) { return { type: constantConstants.CONSTANT_FAILURE, error } }
};