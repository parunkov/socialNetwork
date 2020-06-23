import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from'./Message/Message';

const Dialogs = (props) => {

	console.log(props);

	const dialogsElements = props.dialogsData.map(data => <DialogsItem name={data.name} id={data.id} />);
	const messagesElements = props.messagesData.map(message => <Message message={message.message} />);
	const newMessage = React.createRef();
	const addMessage = () => {
		props.addMessage();
	}
	const onInputChange = () => {
		const message = newMessage.current.value;
		props.updateNewMessage(message);
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				{messagesElements}
			</div>
			<div className={styles.addMessageBlock}>
				<textarea ref={newMessage} cols="30" rows="5" className={styles.input} onChange={onInputChange} value={props.newMessageText} />
				<div>
					<button onClick={addMessage}>Add message</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;