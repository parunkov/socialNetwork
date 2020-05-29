import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
	const DialogsItem = (props) => {
		let path = '/dialogs/' + props.id;
		return (
			<div className={styles.dialog}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>
		)
	}

	const Message = (props) => {
		return <div className={styles.message}>{props.message}</div>
	}

	const data = ['Andrey', 'Galina', 'Anna', 'Maxim', 'Tanya'];
	const dialogsData = [];
	for (let i = 0; i < data.length; i++) {
		dialogsData[i] = {};
		dialogsData[i].id = i + 1;
		dialogsData[i].name = data[i];
	}
	const messages = ['Hi', 'How are you?', 'Yo'];
	const messagesData = [];
	for (let i = 0; i < messages.length; i++) {
		messagesData[i] = {};
		messagesData[i].id = i + 1;
		messagesData[i].message = messages[i];
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>

				<DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogsItem name="Galina" id="2" />
				<DialogsItem name="Anna" id="3" />
				<DialogsItem name="Maxim" id="4" />
				<DialogsItem name="Tanya" id="5" />

			</div>
			<div className={styles.messages}>

				<Message message={messagesData[0].message} />
				<Message message="How are you?" />
				<Message message="Yo" />
				
			</div>
		</div>
	);
}

export default Dialogs;