import React from 'react';
import styles from './Dialogs.module.css';
// import {NavLink} from 'react-router-dom';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from'./Message/Message';
import {addMessageActionCreator, updateNewMessageActionCreator} from './../../redux/state'

const Dialogs = (props) => {

	const dialogsElements = props.state.dialogsData.map(data => <DialogsItem name={data.name} id={data.id} />);
	const messagesElements = props.state.messagesData.map(message => <Message message={message.message} />);
	const newMessage = React.createRef();
	const addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}
	const onInputChange = () => {
		const message = newMessage.current.value;
		props.dispatch(updateNewMessageActionCreator(message));
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
				<textarea ref={newMessage} cols="30" rows="5" className={styles.input} onChange={onInputChange} value={props.state.newMessageText} />
				<div>
					<button onClick={addMessage}>Add message</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;