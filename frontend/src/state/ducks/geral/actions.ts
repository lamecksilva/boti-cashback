import { AppThunk } from '../..';
import { TOGGLE_DRAWER } from './types';

export const toggleDrawerAction = (): AppThunk => async (dispatch) => {
	return dispatch({ type: TOGGLE_DRAWER });
};
