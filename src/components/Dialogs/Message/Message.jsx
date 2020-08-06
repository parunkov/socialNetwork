import React from 'react';
import styles from './../Dialogs.module.scss';

const Message = (props) => {
	return (
		<div className={styles.message}>
			<img className={styles.message__avatar} src={props.messagesPhoto} alt=""/>
			<div className={styles.message__text}>{props.message}</div>
		</div>
	)
}

export default Message;