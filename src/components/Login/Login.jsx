import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login, logout} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

const LoginForm = (props) => {
	// console.log(props);
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} />
			</div>
			<div>
				<Field type="password" placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
			</div>
			<div>
				<Field component={Input} name={"rememberMe"} type="checkbox"/> Remember me
			</div>
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
		console.log(formData);
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