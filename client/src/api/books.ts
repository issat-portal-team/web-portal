import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export const bookSearch = (name: string): AxiosPromise<any> =>
    request({
        url: '/books/search',
        method: 'GET',
        params: {
            name
        }
    })