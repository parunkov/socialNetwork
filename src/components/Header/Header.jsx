import React from 'react';
import styles from './Header.module.scss';
import LoginBlockContainer from '../common/LoginBlock/LoginBlockContainer';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>Social<span>Network</span></h1>
			<div className={styles.login}>
				<LoginBlockContainer />
			</div>
		</header>
	);
}

export default Header;