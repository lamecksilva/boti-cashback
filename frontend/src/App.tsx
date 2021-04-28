import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import { Routes } from './Routes';
import { store } from './state';
import theme from './theme';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Routes />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
