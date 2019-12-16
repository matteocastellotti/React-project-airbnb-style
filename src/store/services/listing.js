import instancePublicApi from '../instancePublicApi';

export const listingService = {
    get,
    search
};

function get(id) {
    return instancePublicApi.get('/listing/' + id).then(handleResponse);
}

function search(searchFilters) {
    return instancePublicApi.post('/listing/search', searchFilters).then(handleResponse);
}

function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.data.data;
}