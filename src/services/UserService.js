import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
    //timeout: 1000
})

apiClient.interceptors.request.use(config => {
    //Called on request
    NProgress.start()
    return config
})
apiClient.interceptors.response.use(response => {
    //Called on response
   NProgress.done()
    return response
})

export default {
    getAllUsers() {
        return apiClient.get('/users/')
    },
    getUsers(perPage, page) {
        return apiClient.get('/users?_limit=' + perPage + '&_page=' + page)
    },
    getUser(id) {
        return apiClient.get('/users/' + id)
    },
    postUser(user) {
        return apiClient.post('/users', user)
    }
}