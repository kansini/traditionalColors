import axios from "axios"

const $http = axios.create({
    baseURL: './data/',
    timeout: 5000,
    // headers: {'Authorization': 'none'}
})

export default $http
