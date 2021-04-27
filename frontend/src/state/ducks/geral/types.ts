export const TOGGLE_DRAWER = 'geral/TOGGLE_DRAWER';

export interface GeralState {
	drawer: boolean;
}

interface ToggleDrawerAction {
	type: typeof TOGGLE_DRAWER;
}

export type GeralActionTypes = ToggleDrawerAction;
