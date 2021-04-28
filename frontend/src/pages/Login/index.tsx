import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

export function LoginPage(): JSX.Element {
	useEffect(() => {
		if (localStorage.authToken) {
			window.location.href = '/dashboard';
		}
	}, []);

	return (
		<Container maxWidth="sm">
			<Typography variant="h5" align="center">
				Boti Cashback - Login
			</Typography>
		</Container>
	);
}
