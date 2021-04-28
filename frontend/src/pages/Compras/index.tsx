import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { BaseContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducer';
import { getProdutosListagemAction } from '../../state/ducks/compras/actions';
import { CompraCard } from '../../components/CompraCard';

export function ComprasPage(): JSX.Element {
	const dispatch = useDispatch();

	const { data } = useSelector((state: RootState) => state.compras.listagem);

	useEffect(() => {
		dispatch(getProdutosListagemAction());
	}, [dispatch]);

	return (
		<BaseContainer>
			<Typography variant="h5" align="center">
				Minhas Compras
			</Typography>

			<Grid container spacing={2}>
				{data.map((item: any) => (
					<Grid key={item?._id} item xs={12} sm={4} lg={4} xl={4}>
						<CompraCard data={item} />
					</Grid>
				))}
			</Grid>
		</BaseContainer>
	);
}
