import axios from 'axios';

let token = sessionStorage.getItem('_token');
if (token === null) {
    token = localStorage.getItem('_token');
}

let instanceApi = axios.create({
    baseURL: process.env.API_URL_V1,
    headers: {
        '_token': token
    }
});

export default instanceApi;