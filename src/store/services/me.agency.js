import instanceApi from '../instanceApi';

export const meAgencyService = {
    get,
    getMain,
    getContact,
    insert,
    update,
    updateMain,
    updateContact
};

function get() {
    return instanceApi.get('me/agencies').then(handleResponse);
}

function getMain() {
    return instanceApi.get('me/agencies/main').then(handleResponse);
}

function getContact() {
    return instanceApi.get('me/agencies/contact').then(handleResponse);
}

function insert(request){
    return instanceApi.post('me/agencies', request).then(handleResponse);
}

function update(request){
    return instanceApi.put('me/agencies', request).then(handleResponse);
}

function updateMain(request){
    return instanceApi.put('me/agencies/main', request).then(handleResponse);
}

function updateContact(request){
    return instanceApi.put('me/agencies/contact', request).then(handleResponse);
}

function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.data.data;
}