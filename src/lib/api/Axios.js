import axios from 'axios';
import { getEnvVariables } from '../utils/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const BASE_URL = VITE_API_URL;

export default axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' }
});

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
});
