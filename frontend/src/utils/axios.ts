import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { getAuthToken } from './authToken';

export const axios: AxiosInstance = Axios.create({
	baseURL: '/api',
	timeout: 10000,
	timeoutErrorMessage: 'Servidor Offline ou não encontrado',
});

// Axios Authorization Header
export function authorizationHeader(): AxiosRequestConfig {
	const authToken = getAuthToken();

	return {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	};
}
