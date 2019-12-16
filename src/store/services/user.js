import axios from 'axios';

export const userService = {
    getById,
    update,
    delete: _delete,
    signup
};

function getById(id) {
    return axios.get('/users/' + id).then(handleResponse);
}

function signup(user) {
    return axios.post('/users/signup').then(handleResponse);
}

function update(user) {
    return axios.put('/users/' + user.id).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete('/users/' + id).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}