import React from 'react';
import styles from './LoginBlock.module.scss';
import {NavLink} from 'react-router-dom';

const LoginBlock = (props) => {
	return (
		<div className={styles.loginBlock}>
				{props.isAuth 
					? <div>
						<img alt="user" className={styles.photo} src={props.userPhoto} />
						<span className={styles.userName}>{props.login}</span>
						<button className={styles.button} onClick={props.logout}>Logout</button>
					</div>
					: <NavLink to="/login">Login</NavLink> }
			</div>
	)
}

export default LoginBlock;