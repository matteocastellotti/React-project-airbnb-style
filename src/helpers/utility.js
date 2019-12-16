import instanceApi from '../store/instanceApi';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export function getToken() {
    try {
        const token = sessionStorage.getItem('_token');
        if (token === null) {
            localStorage.getItem('_token');
        }
        return token;
    } catch (err) {
        localStorage.removeItem('_token');
        return null;
    }
}

export function setToken(rememberMe, token) {
    if (rememberMe) {
        localStorage.setItem('_token', token);
    } else {
        sessionStorage.setItem('_token', token);
    }
    instanceApi.defaults.headers['_token'] = token;
}

export function stripTrailingSlash(str) {
    if (str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
};

export function buildFilters(value, item, searchFilters) {
    let res = Object.assign({}, searchFilters.filters);
    if (item.value_type === "array") {
        var filter = res[item.key] || [];
        var filterTemp = [];
        if (filter.length !== 0 && !value && (filterTemp = filter.filter(value => {
            return value !== item.value
        })) && filter.length !== 0) { 
            filter = filterTemp;
        } else {
            filter.push(item.value);
        }
        res[item.key] = filter;
    }
    if (item.value_type === "boolean") {
        var value = res[item.key] !== item.value ? item.value : !item.value;
        if(value) {
            res[item.key] = value;
        } else {
            delete res[item.key];
        }
    }
    return res;
}

export function retrieveFilterValue(props) {
    switch (props.item.type) {
    case "checkbox":
        if (props.item.value_type === "array") {
            return !!props.searchFilters.filters[props.item.key] && (props.searchFilters.filters[props.item.key].includes(props.item.value));
        }
        if (props.item.value_type === "boolean") {
            return !!props.searchFilters.filters[props.item.key];
        }
        return !!props.searchFilters.filters[props.item.key] && props.searchFilters.filters[props.item.key] === props.item.value
    default:
        return false
    }
}