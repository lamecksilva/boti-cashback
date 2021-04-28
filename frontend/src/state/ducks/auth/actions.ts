import { AppThunk } from '../..';
import { setAuthToken, axios, errorHandler } from '../../../utils';
import {
	FAILURE_AUTH_TOKEN,
	FAILURE_LOGIN,
	REQUEST_AUTH_TOKEN,
	REQUEST_LOGIN,
	SUCCESS_AUTH_TOKEN,
	SUCCESS_LOGIN,
} from './types';

export const getAuthTokenAction = (): AppThunk => (dispatch) => {
	dispatch({ type: REQUEST_AUTH_TOKEN });
};

// Action to dispatch success found token
export const successAuthTokenAction = (): AppThunk => (dispatch) => {
	dispatch({ type: SUCCESS_AUTH_TOKEN });
};

// Action to dispatch failure found token
export const failureAuthTokenAction = (): AppThunk => (dispatch) => {
	dispatch({ type: FAILURE_AUTH_TOKEN });
};

interface LoginActionParams {
	email: string;
	senha: string;
}

export const loginRequestAction = (
	loginData: LoginActionParams,
	history: any
): AppThunk => async (dispatch) => {
	dispatch({ type: REQUEST_LOGIN });

	try {
		const { data } = await axios.post('/usuarios/login', loginData);

		setAuthToken(data.payload.token);

		history.push('/dashboard');

		return dispatch({ type: SUCCESS_LOGIN, payload: { user: {} } });
	} catch (err) {
		return errorHandler(err, dispatch, FAILURE_LOGIN);
	}
};
