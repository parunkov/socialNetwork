import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className="">
			{/*<div>
				<img src="https://wallup.net/wp-content/uploads/2019/09/682919-woodenpath.jpg" width="600" alt=""/>
			</div>*/}
			<img src={props.profile.photos.large} alt="" />
			<div className={styles.descripionBlock}>{props.profile.fullName}</div>
			{/*<a className={styles.descripionBlock} href={'http://' + props.profile.contacts.facebook}>Facebook</a>
			<a className={styles.descripionBlock} href={'http://' + props.profile.contacts.vk}>VK</a>
			<a className={styles.descripionBlock} href={'http://' + props.profile.contacts.twitter}>Twitter</a>*/}
			<div className={styles.descripionBlock}>{props.profile.aboutMe}</div>
			{/*<div className={styles.descripionBlock}>ava + descripion</div>*/}
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
		</div>
	)
}

export default ProfileInfo;