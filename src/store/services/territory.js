import instancePublicApi from '../instancePublicApi';

export const territoryService = {
    search,
    searchCountry,
    searchProvince,
    searchRegion,
    searchTown
}

function search(searchFilters) {
    return instancePublicApi.post('/territory/search', searchFilters).then(handleResponse);
}

function searchCountry(searchFilters) {
    return instancePublicApi.post('/territory/search/country', searchFilters).then(handleResponse);
}

function searchProvince(searchFilters) {
    return instancePublicApi.post('/territory/search/province', searchFilters).then(handleResponse);
}

function searchRegion(searchFilters) {
    return instancePublicApi.post('/territory/search/region', searchFilters).then(handleResponse);
}

function searchTown(searchFilters) {
    return instancePublicApi.post('/territory/search/town', searchFilters).then(handleResponse);
}

function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.data.data;
}