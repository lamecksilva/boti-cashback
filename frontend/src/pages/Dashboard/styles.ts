import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
	gridCard1: {
		minHeight: '100px',
		padding: theme.spacing(2),
		backgroundColor: theme.palette.primary.main,
		// borderRadius: theme.spacing(0.5),
		// borderTopLeftRadius: theme.spacing(0.7),
		// borderBottomLeftRadius: theme.spacing(0.7),
	},
	gridCard2: {
		minHeight: '100px',
		padding: theme.spacing(2),
		backgroundColor: theme.palette.primary.light,
		// borderRadius: theme.spacing(0.5),

		// borderTopRightRadius: theme.spacing(0.7),
		// borderBottomRightRadius: theme.spacing(0.7),
	},
	p1: {
		padding: theme.spacing(1),
	},
	mt2: {
		marginTop: theme.spacing(2),
	},
	gridContainer: {
		height: 350,
		width: '100%',
	},
	visualizarButton: {
		backgroundColor: theme.palette.primary.light,
		textTransform: 'none',
		padding: theme.spacing(1),
		// fontSize:
	},
	adicionarButton: {
		backgroundColor: theme.palette.primary.main,
		textTransform: 'none',
		padding: theme.spacing(1),
	},
}));
