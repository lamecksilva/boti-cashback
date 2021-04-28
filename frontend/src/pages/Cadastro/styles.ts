import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
	title: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
