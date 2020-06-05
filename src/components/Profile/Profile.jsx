import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts 
				postsData={props.state.postsData} 
				addPost={props.addPost} 
				updateNewPostText={props.updateNewPostText} 
				newPostText={props.state.newPostText} />
		</div>
		);
}

export default Profile;