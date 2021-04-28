import {
	AuthActionTypes,
	AuthState,
	FAILURE_AUTH_TOKEN,
	FAILURE_LOGIN,
	REQUEST_AUTH_TOKEN,
	REQUEST_LOGIN,
	SUCCESS_AUTH_TOKEN,
	SUCCESS_LOGIN,
} from './types';

const initialState: AuthState = {
	authLoading: false,
	isAuthenticated: false,
	login: {
		errorMessage: '',
		errors: {},
		loading: false,
	},
};

export default function reducer(
	state = initialState,
	action: AuthActionTypes
): AuthState {
	switch (action.type) {
		case REQUEST_AUTH_TOKEN:
			return {
				...state,
				authLoading: true,
				isAuthenticated: false,
			};

		case SUCCESS_AUTH_TOKEN:
			return {
				...state,
				authLoading: false,
				isAuthenticated: true,
			};

		case FAILURE_AUTH_TOKEN:
			return {
				...state,
				authLoading: false,
				isAuthenticated: false,
			};

		case REQUEST_LOGIN:
			return {
				...state,
				isAuthenticated: false,
				login: {
					errorMessage: '',
					errors: {},
					loading: true,
				},
			};

		case FAILURE_LOGIN:
			return {
				...state,
				isAuthenticated: false,
				login: {
					errorMessage: action.payload.errorMessage,
					errors: action.payload.errors,
					loading: false,
				},
			};

		case SUCCESS_LOGIN:
			return {
				...state,
				isAuthenticated: true,
				login: {
					errorMessage: '',
					errors: {},
					loading: false,
				},
			};

		default:
			return state;
	}
}
