import {
	AppBar,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link, useHistory } from 'react-router-dom';
import { logoutAction } from '../../state/ducks/auth/actions';
import { toggleDrawerAction } from '../../state/ducks/geral/actions';
import { RootState } from '../../state/reducer';

import useStyles from './styles';

export function Navbar(): JSX.Element {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const { drawer } = useSelector((state: RootState) => state.geral);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	function logout() {
		dispatch(logoutAction(history));
	}

	function handleDrawer() {
		dispatch(toggleDrawerAction());
	}

	return (
		<>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawer}
						edge="start"
						// className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Boti Cashback
					</Typography>

					<IconButton
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<AccountCircle color="secondary" />
					</IconButton>

					<Menu
						className={classes.menu}
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						<MenuItem onClick={logout}>
							Sair {'    '}
							<ExitToApp />
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>

			<Drawer
				open={drawer}
				className={classes.drawer}
				classes={{
					paper: classes.drawerPaper,
				}}
				onClose={handleDrawer}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</div>

				<List className={classes.list}>
					<Divider />

					<Link
						to="/dashboard"
						onClick={handleDrawer}
						key="dashboard"
						className={classes.link}
					>
						<ListItem button>
							{/* <ListItemIcon>{item.icon}</ListItemIcon> */}
							<ListItemText primary="Dashboard" />
						</ListItem>
					</Link>
					<Divider />
					<Link
						to="/compras"
						key="compras"
						onClick={handleDrawer}
						className={classes.link}
					>
						<ListItem button>
							{/* <ListItemIcon>{item.icon}</ListItemIcon> */}
							<ListItemText primary="Minhas Compras" />
						</ListItem>
					</Link>
					<Divider />
				</List>
			</Drawer>
		</>
	);
}
