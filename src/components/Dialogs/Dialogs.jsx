import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {reduxForm, Field} from 'redux-form';

const Dialogs = (props) => {

	// console.log(props.isAuth);

	const dialogsElements = props.dialogsData.map(data => <DialogsItem name={data.name} key={data.id} id={data.id} />);
	const messagesElements = props.messagesData.map(message => <Message message={message.message} key={message.id} />);
	// const newMessage = React.createRef();

	const MessageForm = (props) => {
		return(
			<form onSubmit={props.handleSubmit}>
				<div className={styles.addMessageBlock}>
					<Field component="textarea" name="message" cols="30" rows="5" className={styles.input} placeholder="Enter new message" />
					<div>
						<button type="submit">Add message</button>
					</div>
				</div>
			</form>
		)
	}

	const MessageReduxForm = reduxForm ({
		form: 'message'
	})(MessageForm);

	const onSubmit = (formData) => {
		props.addMessage(formData.message);
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				{messagesElements}
			</div>
			<MessageReduxForm onSubmit={onSubmit} />
		</div>
	);
}

export default Dialogs;