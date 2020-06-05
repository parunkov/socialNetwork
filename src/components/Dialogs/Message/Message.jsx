import React from 'react';
import styles from './../Dialogs.module.css';

const Message = (props) => {
	return (
		<div className={styles.message}>
			<img className={styles.message__avatar} src="https://www.1zoom.ru/big2/30/147941-aleni.jpg" alt=""/>
			<div className={styles.message__text}>{props.message}</div>
		</div>
	)
}

export default Message;