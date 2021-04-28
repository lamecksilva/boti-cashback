import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import {
	DataGrid,
	GridColDef,
	GridValueGetterParams,
	// GridValueGetterParams,
} from '@material-ui/data-grid';
import { Add } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { BaseContainer } from '../../components';
import useStyles from './styles';
import { getProdutosListagemAction } from '../../state/ducks/compras/actions';
import { RootState } from '../../state/reducer';

export function DashboardPage(): JSX.Element {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { data } = useSelector((state: RootState) => state.compras.listagem);

	useEffect(() => {
		dispatch(getProdutosListagemAction());
	}, [dispatch]);

	const columns: GridColDef[] = [
		{
			field: 'codigo',
			headerName: 'Código',
			width: 140,
			sortable: false,
			disableColumnMenu: true,
		},
		{
			field: 'valor',
			headerName: 'Valor',
			width: 100,
			editable: false,
			sortable: false,
			resizable: false,
			disableColumnMenu: true,
			valueGetter: (params: GridValueGetterParams) => `R$ ${params.row.valor}`,
		},
		{
			field: 'cashback',
			headerName: 'Valor Cashback',
			width: 140,
			editable: false,
			sortable: false,
			resizable: false,
			disableColumnMenu: true,
			valueGetter: (params: GridValueGetterParams) =>
				`R$ ${params.row.cashback.valor}`,
		},
	];

	return (
		<BaseContainer>
			<Grid container spacing={1} direction="row" justify="space-between">
				<Grid item xs={6} md={6} className={classes.gridCard1}>
					<Typography variant="body1">R$ Total Cashback</Typography>

					<Typography variant="h5">R$ 10.00</Typography>
				</Grid>
				<Grid item xs={6} md={6} className={classes.gridCard2}>
					<Typography variant="body1">Compras Cadastradas</Typography>

					<Typography variant="h5">12</Typography>
				</Grid>
			</Grid>

			<Typography variant="h6" className={classes.mt2} gutterBottom>
				Compras
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={12} md={6} sm={6} lg={6} xl={6}>
					<div className={classes.gridContainer}>
						<DataGrid
							columns={columns}
							// Fix a id error with DataGrid component
							rows={data.map((item: any) => {
								return {
									...item,
									id: item._id,
								};
							})}
							disableColumnFilter
							disableColumnResize
							autoPageSize
							hideFooter
							hideFooterPagination
						/>
					</div>

					<div className={classes.mt2}>
						<Grid
							container
							direction="row"
							justify="space-between"
							alignItems="center"
							spacing={2}
						>
							<Grid item>
								<Button
									component={RouterLink}
									variant="contained"
									className={classes.visualizarButton}
									to="/compras"
								>
									Visualizar todas Compras
								</Button>
							</Grid>

							<Grid item>
								<Button
									component={RouterLink}
									variant="contained"
									startIcon={<Add />}
									color="primary"
									className={classes.adicionarButton}
									to="/compras-cadastro"
								>
									Adicionar Compra
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
				<Grid item xs={12} md={6} sm={6} lg={6} xl={6}></Grid>
			</Grid>
		</BaseContainer>
	);
}
