import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>Social<span>Network</span></h1>
			<div className={styles.loginBlock}>
				{props.isAuth 
					? <div>{props.login + ' '}
					 <button onClick={props.logout}>Logout</button></div>
					: <NavLink to="/login">Login</NavLink> }
			</div>
		</header>
	);
}

export default Header;