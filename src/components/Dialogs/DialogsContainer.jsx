import {addMessageActionCreator, updateNewMessageActionCreator} from './../../redux/messages-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogsData: state.messages.dialogsData,
		messagesData: state.messages.messagesData,
		newMessageText: state.messages.newMessageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessage: (message) => {
			dispatch(updateNewMessageActionCreator(message));
		},
		addMessage: () => {
			dispatch(addMessageActionCreator());
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;