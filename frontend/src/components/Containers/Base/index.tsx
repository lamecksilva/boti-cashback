// import { Navbar } from 'components';
import React from 'react';

// import { Navbar } from '../../Navbar';
import useStyles from './styles';

interface BaseContainerProps {
	children: React.ReactElement | JSX.Element | JSX.Element[];
}

export function BaseContainer({ children }: BaseContainerProps): JSX.Element {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* <Navbar /> */}

			<div className={classes.content}>
				<div className={classes.toolbar} />
				<>{children}</>
			</div>
		</div>
	);
}
