import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';
import './Header.css';


const useStyles = makeStyles({
	bgBlack: {
		backgroundColor: '#2f2f2f !important',
		boxShadow: 'none',
		padding: '10px 0px'
	},
	bgTransparent: {
		backgroundColor: 'transparent !important',
		boxShadow: 'none',
		padding: '10px 0px'
	}
});

function Header() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		drawerOpen: false,
		headerShow: false
	})

	React.useEffect (() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setState({ ...state, headerShow: true });
		} else {
			setState({ ...state, headerShow: false });
		}
	};

	const toggleDrawer = (value) => {
		setState({ ...state, drawerOpen: value });
	};
	
	return (
		<div>
			<AppBar position="fixed" classes={{root: state.headerShow ? classes.bgBlack : classes.bgTransparent}}>
				<Toolbar>
					<div className="header_logo">
						<div className="font-righteous header_logo_venue">The Venue</div>
						<div className="header_logo_title">Musical Events</div>
					</div>
					<IconButton aria-label="Menu" color="inherit" onClick={() => toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<SideDrawer open={state.drawerOpen} onClose={(value) => toggleDrawer(value)} />
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;