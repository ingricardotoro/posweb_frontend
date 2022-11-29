import axios from 'axios';
//import { getEnvVariables } from '../utils/getEnvVariables';

//const { VITE_API_URL } = getEnvVariables();

const BASE_URL = 'https://api.dataplushn.com';

export default axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: { 'Content-Type': 'application/json' }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});