import {
	FAILURE_CRIAR_COMPRA,
	FAILURE_COMPRAS_LISTAGEM,
	ComprasActionTypes,
	ComprasState,
	REQUEST_CRIAR_COMPRA,
	REQUEST_COMPRAS_LISTAGEM,
	SUCCESS_CRIAR_COMPRA,
	SUCCESS_COMPRAS_LISTAGEM,
} from './types';

const initialState: ComprasState = {
	listagem: {
		loading: false,
		data: [],
		errorMessage: '',
	},
	criar: {
		loading: false,
		errors: {},
		errorMessage: '',
	},
};

export default function reducer(
	state = initialState,
	action: ComprasActionTypes
): ComprasState {
	switch (action.type) {
		case REQUEST_COMPRAS_LISTAGEM:
			return {
				...state,
				listagem: {
					...state.listagem,
					loading: true,
					errorMessage: '',
				},
			};
		case SUCCESS_COMPRAS_LISTAGEM:
			return {
				...state,
				listagem: {
					...state.listagem,
					loading: false,
					data: action.payload,
				},
			};
		case FAILURE_COMPRAS_LISTAGEM:
			return {
				...state,
				listagem: {
					...state.listagem,
					loading: false,
					errorMessage: action.payload.errorMessage,
				},
			};

		case REQUEST_CRIAR_COMPRA:
			return {
				...state,
				criar: {
					...state.criar,
					loading: true,
					errorMessage: '',
					errors: {},
				},
			};
		case SUCCESS_CRIAR_COMPRA:
			return {
				...state,
				criar: {
					...state.criar,
					loading: false,
					errorMessage: '',
					errors: {},
				},
			};
		case FAILURE_CRIAR_COMPRA:
			return {
				...state,
				criar: {
					...state.criar,
					loading: false,
					errorMessage: action.payload.errorMessage,
					errors: action.payload.errors,
				},
			};

		default:
			return state;
	}
}
