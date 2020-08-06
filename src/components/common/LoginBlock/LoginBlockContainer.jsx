import React from 'react';
import {connect} from 'react-redux';
import LoginBlock from './LoginBlock';
import {logout, checkLogin, setAuthUserData} from '../../../redux/auth-reducer';

class LoginBlockContainer extends React.Component {
	componentDidMount() {
		this.props.checkLogin();
	}
	render() {
		return <LoginBlock {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth, 
	login: state.auth.login,
	userPhoto: state.messages.messagesPhoto
});

export default connect(mapStateToProps, {setAuthUserData, checkLogin, logout})(LoginBlockContainer);