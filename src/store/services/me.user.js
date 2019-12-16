import instanceApi from '../instanceApi';

export const meUserService = {
    get,
    insert,
    update,
};

function get() {
    return instanceApi.get('/me').then(handleResponse);
}

function insert(request){
    return instanceApi.post('/me/public', request).then(handleResponse);
}

function update(request){
    return instanceApi.put('/me', request).then(handleResponse);
}

function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.data.data;
}