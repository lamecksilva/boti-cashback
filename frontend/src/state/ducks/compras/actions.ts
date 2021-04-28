import jwtDecode from 'jwt-decode';
import { AppThunk } from '../..';
import { authorizationHeader, axios, errorHandler } from '../../../utils';
import {
	FAILURE_CRIAR_COMPRA,
	FAILURE_COMPRAS_LISTAGEM,
	REQUEST_CRIAR_COMPRA,
	REQUEST_COMPRAS_LISTAGEM,
	SUCCESS_CRIAR_COMPRA,
	SUCCESS_COMPRAS_LISTAGEM,
} from './types';

export const getProdutosListagemAction = (): AppThunk => async (dispatch) => {
	dispatch({ type: REQUEST_COMPRAS_LISTAGEM });

	try {
		const decoded: any = jwtDecode(localStorage.authToken);

		const { data } = await axios.get(
			`/compras/usuario/${decoded.id}`,
			authorizationHeader()
		);

		return dispatch({ type: SUCCESS_COMPRAS_LISTAGEM, payload: data.payload });
	} catch (err) {
		return errorHandler(err, dispatch, FAILURE_COMPRAS_LISTAGEM);
	}
};

interface CriarProdutoParams {
	valor: number;
	codigo: string;
	data: Date;
}

export const createProdutoAction = (
	params: CriarProdutoParams,
	history: any
): AppThunk => async (dispatch) => {
	dispatch({ type: REQUEST_CRIAR_COMPRA });

	try {
		await axios.post('/compras', params, authorizationHeader());

		history.push('/compras');

		return dispatch({ type: SUCCESS_CRIAR_COMPRA });
	} catch (err) {
		errorHandler(err, dispatch, FAILURE_CRIAR_COMPRA);
	}
};
