import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { BaseContainer } from '../../components';
import useStyles from './styles';
import { RootState } from '../../state/reducer';
import { isEmpty } from '../../utils';
import { createCompraAction } from '../../state/ducks/compras/actions';

export function CadastroCompraPage(): JSX.Element {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const { errors } = useSelector((state: RootState) => state.compras.criar);

	const [state, setState] = useState({
		codigo: '',
		valor: 0,
		data: new Date(),
	});

	function handleSubmit(
		event:
			| React.FormEvent<HTMLFormElement>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
			| React.MouseEvent<Element, MouseEvent>
	) {
		event.preventDefault();

		dispatch(createCompraAction(state, history));
	}

	return (
		<BaseContainer>
			<Typography variant="h5" align="center">
				Cadastrar Nova Compra
			</Typography>

			<Container component="main" maxWidth="sm">
				<div className={classes.form}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="codigo_compra"
						label="Código da Compra"
						name="codigo_compra"
						autoComplete="codigo_compra"
						autoFocus
						onChange={(
							event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
						) => setState({ ...state, codigo: event.target.value })}
						error={!isEmpty(errors?.codigo)}
						helperText={errors?.codigo}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="valor_compra"
						type="number"
						label="Valor da Compra (Em Reais)"
						name="valor_compra"
						autoComplete="valor_compra"
						autoFocus
						onChange={(
							event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
						) => setState({ ...state, valor: parseInt(event.target.value) })}
						error={!isEmpty(errors?.valor)}
						helperText={errors?.valor}
					/>
					<TextField
						variant="outlined"
						autoFocus
						InputLabelProps={{ shrink: true }}
						margin="normal"
						required
						type="date"
						fullWidth
						id="data"
						label="Data mm/dd/yyyy"
						name="data"
						onChange={(
							event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
						) => setState({ ...state, data: new Date(event.target.value) })}
						error={!isEmpty(errors?.data)}
						helperText={errors?.data}
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Cadastrar Compra
					</Button>
				</div>
			</Container>
		</BaseContainer>
	);
}
