import instanceApi from '../instanceApi';

export const meListingService = {
    get,
    getSummary,
    getType,
    getPlace,
    getDetail,
    getComfort,
    getPrice,
    getAllComplete,
    insert,
    update,
    updateOwner,
    updateType,
    updatePlace,
    updateDetails,
    updateComforts,
    remove,
    countAll
};

function get(id) {
    return instanceApi.get('/me/listings/' + id).then(handleResponse);
}

function getSummary(id) {
    return instanceApi.get('/me/listings/' + id + '/summary').then(handleResponse);
}

function getType(id) {
    return instanceApi.get('/me/listings/' + id + '/type').then(handleResponse);
}

function getPlace(id) {
    return instanceApi.get('/me/listings/' + id + '/place').then(handleResponse);
}

function getDetail(id) {
return instanceApi.get('/me/listings/' + id + '/detail').then(handleResponse);
}

function getComfort(id) {
    return instanceApi.get('/me/listings/' + id + '/comfort').then(handleResponse);
}

function getPrice(id) {
    return instanceApi.get('/me/listings/' + id + '/price').then(handleResponse);
}

function getAllComplete() {
    return instanceApi.get('/me/listings/complete').then(handleResponse);
}

function insert(request) {
    return instanceApi.post('/me/listings/', request).then(handleResponse);
}

function update(id, request) {
    return instanceApi.put('/me/listings/' + id, request).then(handleResponse);
}

function updateOwner(id, request) {
    return instanceApi.put('/me/listings/' + id + '/owner', request).then(handleResponse);
}

function updateType(id, request) {
    return instanceApi.put('/me/listings/' + id + '/type', request).then(handleResponse);
}

function updatePlace(id, request) {
    return instanceApi.put('/me/listings/' + id + '/place', request).then(handleResponse);
}

function updateDetails(id, request) {
    return instanceApi.put('/me/listings/' + id + '/details', request).then(handleResponse);
}

function updateComforts(id, request) {
    return instanceApi.put('/me/listings/' + id + '/comforts', request).then(handleResponse);
}

function remove(id) {
    return instanceApi.delete('/me/listings/' + id).then(handleResponse);
}

function countAll(request) {
    return instanceApi.get('/me/listings/count', request).then(handleResponse);
}

function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.data.data;
}