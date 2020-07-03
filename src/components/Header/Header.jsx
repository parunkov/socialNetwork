import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<img src="https://im0-tub-ru.yandex.net/i?id=ae1fc58b4fa314a7812c1365e0434c84&n=13" width="60" alt=""/>
			<div className={styles.loginBlock}>
				{props.isAuth ? props.login
				: <NavLink to="/login">Login</NavLink> }
			</div>
		</header>
	);
}

export default Header;