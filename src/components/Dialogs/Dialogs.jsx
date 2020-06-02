import React from 'react';
import styles from './Dialogs.module.css';
// import {NavLink} from 'react-router-dom';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from'./Message/Message';

const Dialogs = (props) => {

	const dialogsElements = props.state.dialogsData.map(data => <DialogsItem name={data.name} id={data.id} />);
	const messagesElements = props.state.messagesData.map(message => <Message message={message.message} />);

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;