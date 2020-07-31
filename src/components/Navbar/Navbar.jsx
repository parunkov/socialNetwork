import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';

const Navbar = () => {
	return (
		<div>
			<nav className={classes.nav}>
				<div className={classes.item}>
					<NavLink to="/profile" activeClassName={classes.activeLink}>
						Profile
					</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to="/dialogs" activeClassName={classes.activeLink}>
						Messages
					</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to="/news" activeClassName={classes.activeLink}>
						News
					</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to="/music" activeClassName={classes.activeLink}>
						Music
					</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to="/settings" activeClassName={classes.activeLink}>
						Settings
					</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to="/users" activeClassName={classes.activeLink}>
						Users
					</NavLink>
				</div>
			</nav>
			<Sidebar />
		</div>
		);
}

export default Navbar;
