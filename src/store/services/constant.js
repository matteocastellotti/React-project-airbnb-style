import instancePublicApi from '../instancePublicApi';

export const constantService = {
    get
};

function get() {
    return instancePublicApi.get('/constant').then(handleResponse);
}

function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.data.data;
}