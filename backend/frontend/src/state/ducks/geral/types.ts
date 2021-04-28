export const TOGGLE_DRAWER = 'geral/TOGGLE_DRAWER';

export const REQUEST_TOTAL_DATA = 'geral/REQUEST_TOTAL_DATA';
export const SUCCESS_TOTAL_DATA = 'geral/SUCCESS_TOTAL_DATA';
export const FAILURE_TOTAL_DATA = 'geral/FAILURE_TOTAL_DATA';

export interface GeralState {
	drawer: boolean;
	totalData: {
		loading: boolean;
		data: {
			totalCashback: number;
			totalCompras: number;
		};
		errorMessage: string;
	};
}

interface ToggleDrawerAction {
	type: typeof TOGGLE_DRAWER;
}

interface RequestTotalDataAction {
	type: typeof REQUEST_TOTAL_DATA;
}
interface SuccessTotalDataAction {
	type: typeof SUCCESS_TOTAL_DATA;
	payload: {
		totalCashback: number;
		totalCompras: number;
	};
}
interface FailureTotalDataAction {
	type: typeof FAILURE_TOTAL_DATA;
	payload: { errorMessage: string };
}

export type GeralActionTypes =
	| ToggleDrawerAction
	| RequestTotalDataAction
	| SuccessTotalDataAction
	| FailureTotalDataAction;
