import React, { useEffect } from 'react';

import { CssBaseline } from '@material-ui/core';
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

function App() {
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
		<>
			<CssBaseline />

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
		</>
	);
}

export default App;
