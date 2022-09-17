import axios from 'axios';
import { getEnvVariables } from '../utils/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

export default async (path, options = {}) => {
	const baseURL = `${VITE_API_URL}/api/${path}`;

	let headers = {
		'Content-Type': 'application/json'
	};

	try {
		const response = await axios({
			...options,
			url: baseURL,
			headers
		});

		const { data } = response;

		return data;
	} catch (error) {
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			throw message;
		}
	}
};
