import React, { useEffect } from 'react';
import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	Link,
	Paper,
} from '@material-ui/core';

import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from '../../state/reducer';
import { cadastroRequestAction } from '../../state/ducks/auth/actions';
import { isEmpty } from '../../utils';
import { Link as RouterLink } from 'react-router-dom';

export function CadastroPage(): JSX.Element {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const { errors } = useSelector((state: RootState) => state.auth.cadastro);

	const [state, setState] = React.useState({
		email: '',
		senha: '',
		cpf: '',
		nome: '',
	});

	useEffect(() => {
		if (localStorage.authToken) {
			window.location.href = '/dashboard';
		}
	}, []);

	function handleSubmit(
		event:
			| React.FormEvent<HTMLFormElement>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
			| React.MouseEvent<Element, MouseEvent>
	) {
		event.preventDefault();

		dispatch(cadastroRequestAction(state, history));
	}

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper}>
				<Typography variant="h5" align="center">
					Boti Cashback - Cadastro
				</Typography>

				<div className={classes.form}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="nome_completo"
						label="Nome Completo"
						name="nome_completo"
						autoComplete="nome"
						autoFocus
						onChange={(
							event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
						) => setState({ ...state, nome: event.target.value })}
						error={!isEmpty(errors?.nome)}
						helperText={errors?.nome}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="CPF"
						label="CPF"
						name="cpf"
						autoComplete="CPF"
						autoFocus
						onChange={(
							event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
						) => setState({ ...state, cpf: event.target.value })}
						error={!isEmpty(errors?.cpf)}
						helperText={errors?.cpf}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(
							event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
						) => setState({ ...state, email: event.target.value })}
						error={!isEmpty(errors?.email)}
						helperText={errors?.email}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Senha"
						type="password"
						id="senha"
						autoComplete="current-password"
						onChange={(
							event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
						) => setState({ ...state, senha: event.target.value })}
						error={!isEmpty(errors?.senha)}
						helperText={errors?.senha}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Cadastrar-se
					</Button>

					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item>
							<Link component={RouterLink} to="/login" variant="body1">
								Login
							</Link>
						</Grid>
					</Grid>
				</div>
			</Paper>
		</Container>
	);
}
