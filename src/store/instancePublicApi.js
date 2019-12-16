import axios from 'axios';

var instancePublicApi = axios.create({
    baseURL:  process.env.API_URL_PUBLIC_V1
  });

  export default instancePublicApi;