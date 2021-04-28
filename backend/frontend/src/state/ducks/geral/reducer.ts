import {
	FAILURE_TOTAL_DATA,
	GeralActionTypes,
	GeralState,
	REQUEST_TOTAL_DATA,
	SUCCESS_TOTAL_DATA,
	TOGGLE_DRAWER,
} from './types';

const initialState: GeralState = {
	drawer: false,
	totalData: {
		data: {
			totalCashback: 0,
			totalCompras: 0,
		},
		errorMessage: '',
		loading: false,
	},
};

export default function reducer(
	state = initialState,
	action: GeralActionTypes
): GeralState {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return {
				...state,
				drawer: !state.drawer,
			};

		case REQUEST_TOTAL_DATA:
			return {
				...state,
				totalData: {
					...state.totalData,
					loading: true,
					errorMessage: '',
				},
			};
		case SUCCESS_TOTAL_DATA:
			return {
				...state,
				totalData: {
					...state.totalData,
					data: {
						totalCashback: action.payload.totalCashback,
						totalCompras: action.payload.totalCompras,
					},
				},
			};
		case FAILURE_TOTAL_DATA:
			return {
				...state,
				totalData: {
					...state.totalData,
					errorMessage: action.payload.errorMessage,
				},
			};
		default:
			return state;
	}
}
