export const REQUEST_COMPRAS_LISTAGEM = 'compras/REQUEST_COMPRAS_LISTAGEM';
export const SUCCESS_COMPRAS_LISTAGEM = 'compras/SUCCESS_COMPRAS_LISTAGEM';
export const FAILURE_COMPRAS_LISTAGEM = 'compras/FAILURE_COMPRAS_LISTAGEM';

export const REQUEST_CRIAR_COMPRA = 'compras/REQUEST_CRIAR_COMPRA';
export const SUCCESS_CRIAR_COMPRA = 'compras/SUCCESS_CRIAR_COMPRA';
export const FAILURE_CRIAR_COMPRA = 'compras/FAILURE_CRIAR_COMPRA';

interface ErrorObjectType {
	[key: string]: string;
}

export interface Compra {
	_id: string;
	status: number;
	codigo: string;
	valor: number;
	data: string;
	usuario: string;
	cashback: Cashback;
	__v: number;
}

export interface Cashback {
	porcentagem: number;
	valor: number;
}

export interface ComprasState {
	listagem: {
		loading: boolean;
		data: any | Compra[];
		errorMessage: string;
	};
	criar: {
		loading: boolean;
		errors: ErrorObjectType;
		errorMessage: string;
	};
}

interface RequestComprasListagem {
	type: typeof REQUEST_COMPRAS_LISTAGEM;
}
interface SuccessComprasListagem {
	type: typeof SUCCESS_COMPRAS_LISTAGEM;
	payload: any;
}
interface FailureComprasListagem {
	type: typeof FAILURE_COMPRAS_LISTAGEM;
	payload: {
		errorMessage: string;
	};
}

interface RequestCompraCriar {
	type: typeof REQUEST_CRIAR_COMPRA;
}
interface SuccessCompraCriar {
	type: typeof SUCCESS_CRIAR_COMPRA;
}
interface FailureCompraCriar {
	type: typeof FAILURE_CRIAR_COMPRA;
	payload: {
		errors: ErrorObjectType;
		errorMessage: string;
	};
}

export type ComprasActionTypes =
	| RequestComprasListagem
	| SuccessComprasListagem
	| FailureComprasListagem
	| RequestCompraCriar
	| SuccessCompraCriar
	| FailureCompraCriar;
