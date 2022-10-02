import axios from 'axios'
//import config from './config.ts'

// export default (function (config) {
//     const $http = axios.create(config);
//     return $http;
// })(config)
const $http = axios.create({

});

$http.interceptors.request.use((config) => {
    config.data = config.data|| {}
    config.data.type="PC"
    // config.data.token =""
})