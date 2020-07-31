import React, {useState}  from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../../assets/images/i.webp';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...props}) => {

	const [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData);
		setEditMode(false);
	}

	// console.log(profile);

	return (
		<div className={styles.infoBlock}>
			{/*<div>
				<img src="https://wallup.net/wp-content/uploads/2019/09/682919-woodenpath.jpg" width="600" alt=""/>
			</div>*/}
			<img className={styles.mainPhoto} src={profile.photos.large || userPhoto} alt="" />
			{isOwner && <input className={styles.fileInput} type="file" onChange={onMainPhotoSelected} />}

			{editMode ?
				<ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
				: <ProfileData goToEditMode={() => {setEditMode(true)}} isOwner={isOwner} profile={profile} />
			}
			{/*<a className={styles.descripionBlock} href={'http://' + props.profile.contacts.facebook}>Facebook</a>
			<a className={styles.descripionBlock} href={'http://' + props.profile.contacts.vk}>VK</a>
			<a className={styles.descripionBlock} href={'http://' + props.profile.contacts.twitter}>Twitter</a>*/}
			{/*<div className={styles.descripionBlock}>ava + descripion</div>*/}
			<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
		</div>
	)
}

const Contact = ({contactTitle, contactValue}) => {
	return (
		<div className={styles.contact}>
			<b>{contactTitle}:</b> {contactValue}
		</div>
	)
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return (
		<div>
			{isOwner &&
				<div>
					<button onClick={goToEditMode}>edit</button>
				</div>
			}
			<div className={styles.profileString}>
				<b>Full name:</b> {profile.fullName}
			</div>
			<div className={styles.profileString}>
				<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			{profile.lookingForAJob && 
				<div className={styles.profileString}>
					<b>My professionals skils:</b> {profile.lookingForAJobDescription}
				</div>
			}
			<div className={styles.profileString}>
				<b>About me:</b> {profile.aboutMe}
			</div>
			<div>
				<b>Contacns:</b> {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div>
		</div>
	)
}

export default ProfileInfo;