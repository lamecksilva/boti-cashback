import React, { useEffect } from 'react';
import {
	Button,
	Container,
	Grid,
	Link,
	TextField,
	Typography,
} from '@material-ui/core';

import { Link as RouterLink, useHistory } from 'react-router-dom';
import useStyles from './styles';
import { loginRequestAction } from '../../state/ducks/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducer';
import { isEmpty } from '../../utils';

export function LoginPage(): JSX.Element {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const { errors } = useSelector((state: RootState) => state.auth.login);

	const [state, setState] = React.useState({ email: '', senha: '' });

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

		dispatch(loginRequestAction(state, history));
	}

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Typography variant="h5" align="center">
					Boti Cashback - Login
				</Typography>

				<div className={classes.form}>
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
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Entrar
					</Button>

					<Link component={RouterLink} to="/cadastro" variant="body1">
						Cadastrar-se
					</Link>

					<Grid container>
						<Grid item xs></Grid>
					</Grid>
				</div>
			</div>
		</Container>
	);
}
