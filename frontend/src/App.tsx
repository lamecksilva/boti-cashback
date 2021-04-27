import React from 'react';
import './App.css';

import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages';

function App() {
	return (
		<>
			<CssBaseline />

			<Router>
				<Switch>
					<Route path="/" exact component={LoginPage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
