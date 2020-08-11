import React from 'react';
import styles from './Header.module.scss';
import LoginBlockContainer from '../common/LoginBlock/LoginBlockContainer';
import cn from 'classnames';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>Social<span>Network</span></h1>
			<div className={styles.login}>
				<LoginBlockContainer />
			</div>
			{props.menuShown && <button type="button" className={styles.burger} onClick={props.toggleMenu}>Close menu
				<div className={cn(styles.burgerLine, styles.burgerLine_cross)}></div>
			</button>}
			{!props.menuShown && <button type="button" className={styles.cross} onClick={props.toggleMenu}>Open menu
				<div className={styles.burgerLine}></div>
			</button>}
		</header>
	);
}

export default Header;