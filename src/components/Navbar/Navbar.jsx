import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import SidebarContainer from './../Sidebar/SidebarContainer';
import LoginBlockContainer from '../common/LoginBlock/LoginBlockContainer';

const Navbar = () => {
	return (
		<div>
			<nav className={styles.nav}>
				<div className={styles.item}>
					<NavLink to="/profile" activeClassName={styles.activeLink}>
						Profile
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to="/dialogs" activeClassName={styles.activeLink}>
						Messages
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to="/news" activeClassName={styles.activeLink}>
						News
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to="/music" activeClassName={styles.activeLink}>
						Music
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to="/settings" activeClassName={styles.activeLink}>
						Settings
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to="/users" activeClassName={styles.activeLink}>
						Users
					</NavLink>
				</div>
			</nav>
			<SidebarContainer />
			<div className={styles.login}>
				<LoginBlockContainer />
			</div>
		</div>
		);
}

export default Navbar;

