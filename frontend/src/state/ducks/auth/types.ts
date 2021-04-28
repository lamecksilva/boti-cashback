/* eslint-disable @typescript-eslint/no-explicit-any */
export const REQUEST_AUTH_TOKEN = 'auth/REQUEST_AUTH_TOKEN';
export const SUCCESS_AUTH_TOKEN = 'auth/SUCCESS_AUTH_TOKEN';
export const FAILURE_AUTH_TOKEN = 'auth/FAILURE_AUTH_TOKEN';

export const REQUEST_LOGIN = 'auth/REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'auth/SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'auth/FAILURE_LOGIN';

export const REQUEST_CADASTRO = 'auth/REQUEST_CADASTRO';
export const SUCCESS_CADASTRO = 'auth/SUCCESS_CADASTRO';
export const FAILURE_CADASTRO = 'auth/FAILURE_CADASTRO';

export const LOGOUT_USER = 'auth/LOGOUT_USER';

interface ErrorObjectType {
	[key: string]: string;
}
export interface AuthState {
	authLoading: boolean;
	isAuthenticated: boolean;
	login: {
		loading: boolean;
		errors: ErrorObjectType;
		errorMessage: string;
	};
	cadastro: {
		loading: boolean;
		errors: ErrorObjectType;
		errorMessage: string;
	};
}

interface AuthTokenRequestAction {
	type: typeof REQUEST_AUTH_TOKEN;
}
interface AuthTokenSuccessAction {
	type: typeof SUCCESS_AUTH_TOKEN;
}
interface AuthTokenFailureAction {
	type: typeof FAILURE_AUTH_TOKEN;
}

interface LogoutUserAction {
	type: typeof LOGOUT_USER;
}
interface LoginRequestAction {
	type: typeof REQUEST_LOGIN;
}
interface LoginSuccessAction {
	type: typeof SUCCESS_LOGIN;
	payload: {
		user: Record<string, unknown>;
	};
}
interface LoginFailureAction {
	type: typeof FAILURE_LOGIN;
	payload: {
		errors: ErrorObjectType;
		errorMessage: string;
	};
}

interface CadastroRequestAction {
	type: typeof REQUEST_CADASTRO;
}
interface CadastroSuccessAction {
	type: typeof SUCCESS_CADASTRO;
}
interface CadastroFailureAction {
	type: typeof FAILURE_CADASTRO;
	payload: {
		errors: ErrorObjectType;
		errorMessage: string;
	};
}

export type AuthActionTypes =
	| LoginRequestAction
	| LoginSuccessAction
	| LoginFailureAction
	| AuthTokenRequestAction
	| AuthTokenSuccessAction
	| AuthTokenFailureAction
	| CadastroRequestAction
	| CadastroSuccessAction
	| CadastroFailureAction
	| LogoutUserAction;
