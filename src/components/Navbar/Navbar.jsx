import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import SidebarContainer from './../Sidebar/SidebarContainer';
import LoginBlockContainer from '../common/LoginBlock/LoginBlockContainer';
import cn from 'classnames';

const Navbar = () => {
	return (
		<div>
			<nav className={styles.nav}>
				<NavLink to="/profile" activeClassName={styles.activeLink}>
					<div className={cn(styles.item, styles.item_profile)}>
						Profile
					</div>
				</NavLink>
				<NavLink to="/dialogs" activeClassName={styles.activeLink}>
					<div className={cn(styles.item, styles.item_messages)}>
						Messages
					</div>
				</NavLink>
				<NavLink to="/news" activeClassName={styles.activeLink}>
					<div className={cn(styles.item, styles.item_news)}>
						News
					</div>
				</NavLink>
				<NavLink to="/music" activeClassName={styles.activeLink}>
					<div className={cn(styles.item, styles.item_music)}>
						Music
					</div>
				</NavLink>
				<NavLink to="/settings" activeClassName={styles.activeLink}>
					<div className={cn(styles.item, styles.item_settings)}>
						Settings
					</div>
				</NavLink>
				<NavLink to="/users" activeClassName={styles.activeLink}>
					<div className={cn(styles.item, styles.item_users)}>
						Users
					</div>
				</NavLink>
			</nav>
			<SidebarContainer />
			<div className={styles.login}>
				<LoginBlockContainer />
			</div>
		</div>
		);
}

export default Navbar;

