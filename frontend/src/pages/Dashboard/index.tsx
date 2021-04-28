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
import { getTotalDataAction } from '../../state/ducks/geral/actions';
import { format } from 'date-fns';

export function DashboardPage(): JSX.Element {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { data } = useSelector((state: RootState) => state.compras.listagem);
	const { totalCashback, totalCompras } = useSelector(
		(state: RootState) => state.geral.totalData.data
	);

	useEffect(() => {
		dispatch(getProdutosListagemAction());
		dispatch(getTotalDataAction());
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
		{
			field: 'data',
			headerName: 'Data',
			width: 150,
			editable: false,
			sortable: false,
			resizable: false,
			disableColumnMenu: true,
			valueGetter: (params: GridValueGetterParams) =>
				`${format(new Date(params.row.data), 'dd/MM/yyyy')}`,
		},
	];

	return (
		<BaseContainer>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid
					item
					xs={6}
					md={6}
					sm={6}
					lg={6}
					xl={6}
					className={classes.gridCard1}
				>
					<div className={classes.p1}>
						<Typography variant="body1">R$ Total Cashback</Typography>

						<Typography variant="h5">R$ {totalCashback || 0.0}</Typography>
					</div>
				</Grid>

				<Grid
					item
					xs={6}
					md={6}
					sm={6}
					lg={6}
					xl={6}
					className={classes.gridCard2}
				>
					<div className={classes.p1}>
						<Typography variant="body1">Compras Cadastradas</Typography>

						<Typography variant="h5">{totalCompras || 0}</Typography>
					</div>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={2}
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={12} md={6} sm={6} lg={6} xl={6}>
					<Typography variant="h6" className={classes.mt2} gutterBottom>
						Compras
					</Typography>

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
				{/* <Grid item xs={12} md={6} sm={6} lg={6} xl={6}></Grid> */}
			</Grid>
		</BaseContainer>
	);
}
