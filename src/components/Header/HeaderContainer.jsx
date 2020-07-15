import React from 'react';
import {setAuthUserData, checkLogin} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import Header from './Header';
import {logout} from '../../redux/auth-reducer';

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
	login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, checkLogin, logout})(HeaderContainer);