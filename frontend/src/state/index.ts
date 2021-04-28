import { Action, applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { rootReducer, RootState } from './reducer';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? // eslint-disable-next-line @typescript-eslint/no-explicit-any
		  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

// Type for redux-thunk actions AppThunk
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
