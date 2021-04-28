import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { format } from 'date-fns';

export interface CompraCardParams {
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

export function CompraCard({ data }: { data: CompraCardParams }): JSX.Element {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Typography variant="body2">Código</Typography>
						<Typography className={classes.textColor}>{data.codigo}</Typography>
					</Grid>

					<Grid item xs={6}>
						<Typography variant="body2">Status</Typography>
						<Typography className={classes.textColor}>
							{data.status === 0
								? 'Em Análise'
								: data.status === 1
								? 'Aprovado'
								: 'Reprovado'}
						</Typography>
					</Grid>

					<Grid item xs={6}>
						<Typography variant="body2">Data:</Typography>
						<Typography variant="body1" className={classes.textColor}>
							{format(new Date(data.data), 'dd/MM/yyyy')}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body2">Valor: </Typography>
						<Typography variant="body1" className={classes.textColor}>
							R$ {data.valor}
						</Typography>
					</Grid>

					<Grid item xs={6}>
						<Typography variant="body2">Porcentagem de Cashback: </Typography>
						<Typography variant="body1" className={classes.textColor}>
							{data.cashback.porcentagem} %
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body2">Valor do Cashback: </Typography>
						<Typography variant="body1" className={classes.textColor}>
							R$ {data.cashback.valor}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
