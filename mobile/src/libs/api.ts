import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://172.24.93.172:3333'
})