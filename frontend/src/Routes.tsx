import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	CadastroCompraPage,
	ComprasPage,
	HomePage,
	CadastroPage,
	LoginPage,
	DashboardPage,
} from './pages';
import { useDispatch } from 'react-redux';
import { getAuthToken } from './utils';
import {
	failureAuthTokenAction,
	getAuthTokenAction,
	successAuthTokenAction,
} from './state/ducks/auth/actions';
import { PrivateRoute } from './components';

export function Routes(): JSX.Element {
	const dispatch = useDispatch();

	useEffect(() => {
		const checkAuth = async () => {
			dispatch(getAuthTokenAction());

			const authToken = getAuthToken();

			if (authToken !== null) {
				dispatch(successAuthTokenAction());
			} else {
				dispatch(failureAuthTokenAction());
			}
		};

		checkAuth();
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />

				<Route path="/login" exact component={LoginPage} />

				<Route path="/cadastro" exact component={CadastroPage} />
			</Switch>

			<Switch>
				<PrivateRoute path="/dashboard" exact component={DashboardPage} />
			</Switch>

			<Switch>
				<PrivateRoute path="/compras" exact component={ComprasPage} />
			</Switch>

			<Switch>
				<PrivateRoute
					path="/compras-cadastro"
					exact
					component={CadastroCompraPage}
				/>
			</Switch>
		</Router>
	);
}
