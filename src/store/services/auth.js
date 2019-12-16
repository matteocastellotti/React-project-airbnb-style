import instanceApi from '../instanceApi';

export const authenticationService = {
    login,
    logout
};

function login(username, password) {
    const headers = {
        headers: {
            '_clientid': 'HH-WEB-UI'
        },
    };

    const request = JSON.stringify({ username, password });

    return instanceApi.post('/login', request, headers)
        .then(response => {
            if (!response.status) {
                return Promise.reject(response.statusText);
            }
            return response;
        });
}

function logout() {
    return instanceApi.post('/logout')
        .then(response => {
            if (!response.status) {
                return Promise.reject(response.statusText);
            }
            sessionStorage.removeItem('token');
            localStorage.removeItem('token');
            return response;
        });
}