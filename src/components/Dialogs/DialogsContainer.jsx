import {addMessage, getMessagesPhoto} from './../../redux/messages-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = (state) => {
	return {
		dialogsData: state.messages.dialogsData,
		messagesData: state.messages.messagesData,
		newMessageText: state.messages.newMessageText,
		messagesPhoto: state.messages.messagesPhoto,
		userId: state.auth.id
	}
}

export default compose(
	connect(mapStateToProps,{addMessage, getMessagesPhoto}),
	withAuthRedirect
)(Dialogs);

