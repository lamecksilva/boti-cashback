import { combineReducers } from 'redux';

import geral from './ducks/geral/reducer';
import auth from './ducks/auth/reducer';
import compras from './ducks/compras/reducer';

export const rootReducer = combineReducers({
	geral,
	auth,
	compras,
});

export type RootState = ReturnType<typeof rootReducer>;
