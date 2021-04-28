import jwtDecode from 'jwt-decode';
import { AppThunk } from '../..';
import { authorizationHeader, axios, errorHandler } from '../../../utils';
import {
	FAILURE_TOTAL_DATA,
	REQUEST_TOTAL_DATA,
	SUCCESS_TOTAL_DATA,
	TOGGLE_DRAWER,
} from './types';

export const toggleDrawerAction = (): AppThunk => async (dispatch) => {
	return dispatch({ type: TOGGLE_DRAWER });
};

export const getTotalDataAction = (): AppThunk => async (dispatch) => {
	dispatch({ type: REQUEST_TOTAL_DATA });

	try {
		const decoded: any = jwtDecode(localStorage.authToken);

		const { data } = await axios.get(
			`/cashback/total/${decoded.id}`,
			authorizationHeader()
		);

		return dispatch({ type: SUCCESS_TOTAL_DATA, payload: data.payload });
	} catch (err) {
		return errorHandler(err, dispatch, FAILURE_TOTAL_DATA);
	}
};
