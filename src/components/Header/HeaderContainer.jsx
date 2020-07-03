import React from 'react';
import {setAuthUserData, checkLogin} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import {userAPI} from '../../api/api';

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

export default connect(mapStateToProps, {setAuthUserData, checkLogin})(HeaderContainer);