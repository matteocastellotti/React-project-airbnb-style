import { countryConstants } from '../constants';
import { countryService } from '../services';

export const countryActions = {
    search
};

function search() {
    let searchFilters = {
        filters: {}
    }
    return dispatch => {
        dispatch(request(searchFilters));

        countryService.search(searchFilters)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: countryConstants.COUNTRY_REQUEST } }
    function success(response) { return { type: countryConstants.COUNTRY_SUCCESS, payload: response } }
    function failure(error) { return { type: countryConstants.COUNTRY_FAILURE, payload: error } }
};