import instancePublicApi from '../instancePublicApi';

export const countryService = {
    search
};

function search(searchFilters) {
    return instancePublicApi.post('/countries/search', searchFilters).then(handleResponse);
}

function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.data.data;
}