import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from 'redux-form';

const FormsControl = ({input, meta: {touched, error}, ...props}) => {
	const hasError = touched && error;
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
			{props.children}
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	const {input, meta, ...restProps} = props;
	return <FormsControl {...props}><textarea {...input} {...restProps}  /></FormsControl>
}
export const Input = (props) => {
	const {input, meta, ...restProps} = props;
	return <FormsControl {...props}><input {...input} {...restProps}  /></FormsControl>
}

export const createField = (placeholder, name, component, validators, props = {}, text = '') => (
	<div>
		<Field 
			placeholder={placeholder} 
			name={name} 
			component={component} 
			validate={validators} 
			{...props}
		/> {text}
	</div>
	)

