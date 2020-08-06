import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.scss';


const Profile = (props) => {

	return (
		<div className={styles.profile}>
			<ProfileInfo 
				savePhoto={props.savePhoto} 
				isOwner={props.isOwner} 
				profile={props.profile} 
				status={props.status} 
				updateStatus={props.updateStatus}
				saveProfile={props.saveProfile} 
				isFollow={props.isFollow}
				{...props}
			/>
			<MyPostsContainer />
		</div>
	);
}

export default Profile;