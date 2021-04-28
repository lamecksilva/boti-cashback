import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
	gridCard1: {
		minHeight: '100px',
		padding: theme.spacing(4),
		backgroundColor: theme.palette.primary.main,
		// borderTopLeftRadius: theme.spacing(0.7),
		// borderBottomLeftRadius: theme.spacing(0.7),
	},
	gridCard2: {
		minHeight: '100px',
		padding: theme.spacing(4),
		backgroundColor: theme.palette.primary.light,
		// borderTopRightRadius: theme.spacing(0.7),
		// borderBottomRightRadius: theme.spacing(0.7),
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
