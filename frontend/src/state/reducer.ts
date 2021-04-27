import { combineReducers } from 'redux';

import geral from './ducks/geral/reducer';

export const rootReducer = combineReducers({
	geral,
});

export type RootState = ReturnType<typeof rootReducer>;
