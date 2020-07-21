import React from 'react';
import {reduxForm} from 'redux-form';
import {Input, createField} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login, logout} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import styles from './Login.module.css';

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField("Login", "login", Input, [required])}
			{createField("Password", "password", Input, [required], {type: "password"})}
			{createField(null, "rememberMe", Input, [], {type: "checkbox"}, 'Remember me')}
			{error && <div className={styles.formSummeryError}>
				{error}
			</div>}
			<div>
				<button type="submit">Login</button>
			</div>
		</form>
	);
}

const LoginReduxForm = reduxForm ({
	form: 'login'
})(LoginForm);

const Login = (props) => {

	const onSubmit = (formData) => {
		// console.log(formData);
		props.login(formData.login, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		console.log(props);
		return <Redirect to={"/profile"} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(Login);