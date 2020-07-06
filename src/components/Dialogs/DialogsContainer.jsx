import {addMessageActionCreator, updateNewMessageActionCreator} from './../../redux/messages-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const AuthRedirectComponent = withAuthRedirect(Dialogs);

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
