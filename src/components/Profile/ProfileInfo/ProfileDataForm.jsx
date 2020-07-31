import React from 'react';
import styles from './ProfileInfo.module.css';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>save</button>
			</div>
			{error && <div className={styles.formSummeryError}>
				{error}
			</div>}
			<div className={styles.profileString}>
				<b>Full name:</b> {createField('Full name', 'fullName', Input, [])}
			</div>
			<div className={styles.profileString}>
				<b>Looking for a job:</b> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
			</div>
			<div className={styles.profileString}>
				<b>My professionals skils:</b> {createField('My professonal skills', 'lookingForAJobDescription', Textarea, [])}
			</div>
			<div className={styles.profileString}>
				<b>About me:</b> {createField('About me', 'aboutMe', Textarea, [])}
			</div>
			<div>
				<b>Contacns:</b> {Object.keys(profile.contacts).map(key => {
					return (
						<div className={styles.contact}>
							<b>{key}:</b> {createField(key, 'contacts.' + key, Input, [])}
						</div>
					)
				})}
			</div>
		</form>
	)
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;