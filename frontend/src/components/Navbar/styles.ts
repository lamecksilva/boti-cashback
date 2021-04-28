import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		// color: '#ffffff'
	},
	mlAuto: {
		marginLeft: 'auto',
	},
	list: {
		width: 250,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: 250,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 250,
	},
	toolbar: theme.mixins.toolbar,
	link: {
		textDecoration: 'none',
		color: theme.palette.primary.contrastText,
	},
	'mt-5': {
		marginTop: '5%',
	},
	menu: {
		marginTop: theme.spacing(6),
	},
}));
