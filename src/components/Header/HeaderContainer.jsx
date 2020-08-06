import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {logout, checkLogin, setAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.checkLogin();
	}
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth, 
	login: state.auth.login,
	userPhoto: state.messages.messagesPhoto
});

export default connect(mapStateToProps, {setAuthUserData, checkLogin, logout})(HeaderContainer);