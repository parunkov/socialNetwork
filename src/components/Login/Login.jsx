import React from 'react';
import {reduxForm} from 'redux-form';
import {Input, createField} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login, logout, getCaptchaUrl} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import styles from './Login.module.scss';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				{createField("Login", "login", Input, [required])}
			</div>
			<div>
				{createField("Password", "password", Input, [required], {type: "password"})}
			</div>
			<div className={styles.checkbox}>
				{createField(null, "rememberMe", Input, [], {type: "checkbox"}, 'Remember me')}
			</div>
			<div className="">
				{captchaUrl && <img src={captchaUrl} alt="captcha" />}
			</div>
			<div className="">
				{captchaUrl && createField("Sumbols from image", "captcha", Input, [required])}
			</div>
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
		props.login(formData.login, formData.password, formData.rememberMe, formData.captcha);
	}

	if (props.isAuth) {
		console.log(props);
		return <Redirect to={"/profile"} />
	}

	return (
		<div className={styles.loginForm}>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login, logout, getCaptchaUrl})(Login);