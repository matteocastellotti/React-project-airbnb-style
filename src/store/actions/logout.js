import { authenticationConstants } from '../constants';
import { authenticationService  } from '../services';
import { headerActions } from '../actions';

export const logoutActions = {
    logout
};

function logout() {
    return dispatch => {
        dispatch(request());

        authenticationService.logout()
            .then(
                response => {
                    localStorage.removeItem('_token');
                    sessionStorage.removeItem('_token');
                    dispatch(success(response));
                    dispatch(headerActions.headerUserLogin())
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: authenticationConstants.LOGOUT_REQUEST } }
    function success(user) { return { type: authenticationConstants.LOGOUT_SUCCESS, user } }
    function failure(error) { return { type: authenticationConstants.LOGOUT_FAILURE, error } }
}