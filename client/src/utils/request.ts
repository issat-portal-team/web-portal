import axios from 'axios'

import { UserModule } from '@/store/modules/user'


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000
})

service.interceptors.request.use(
    (config) => {
        // Add Authorization header to every request, you can add other custom headers here
        if (UserModule.token) {
            config.headers['Authorization'] = `Bearer ${UserModule.token}`
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

export default service