/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { isEmpty } from './is-empty';

/**
 * errorsObject
 *
 * Function to return action with formatted errors object
 *
 * @param {string} type
 * @param {any} errors
 */
export function errorsObject(
	type: string,
	errors: any,
	message: string,
	dispatch?: any
): any {
	// const errs: any = {};

	// Object.keys(errors).forEach((key: any) => {
	// 	errs[key] = typeof errors[key] === 'object' ? errors[key][0] : errors[key];
	// });

	return dispatch({
		type,
		payload: {
			errorMessage: message,
			errors,
		},
	});
}

/**
 * errorMessage
 *
 * Function to return action with errorMessage and empty errors object
 *
 * @param {string} type
 * @param {string} errorMessage
 * @param {string} dispatch
 */
export function errorMessage(type: string, eMessage: string, dispatch?: any) {
	const message =
		eMessage === 'Network Error'
			? 'Falha na conexão com o servidor'
			: eMessage === 'Request failed with status code 500'
			? 'Falha na conexão com o servidor'
			: eMessage === 'Request failed with status code 401'
			? 'Requisição não autorizada'
			: eMessage;

	return dispatch({
		type,
		payload: {
			errorMessage: message,
			errors: {},
		},
	});
}

/**
 * simpleReturn
 *
 * @param type
 * @param payload
 */
export function simpleReturn(type: string, payload: any) {
	return {
		type,
		payload,
	};
}

/**
 * errorHandler
 *
 * @param err
 * @param dispatch
 * @param type
 */
export function errorHandler(err: any, dispatch: any, type: string) {
	console.log(err.message);
	// console.log(err);
	// console.dir(err);
	// console.log(err.response);

	return isEmpty(err.response)
		? errorMessage(type, err.message, dispatch)
		: typeof err.response.data.error === 'string'
		? errorMessage(type, err.response.data.error, dispatch)
		: // Check if is a object of errors
		typeof err.response.data.errors === 'object'
		? errorsObject(
				type,
				err.response.data.errors,
				err?.response.data.message,
				dispatch
		  )
		: // Else, return a simple error.mesasge (like, network error and etc...)
		  errorMessage(type, err.message, dispatch);
}
