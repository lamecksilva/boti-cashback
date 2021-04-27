import { GeralActionTypes, GeralState, TOGGLE_DRAWER } from './types';

const initialState: GeralState = {
	drawer: false,
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
		default:
			return state;
	}
}
