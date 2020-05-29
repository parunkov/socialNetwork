import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div className="">
			<div>
				<img src="https://wallup.net/wp-content/uploads/2019/09/682919-woodenpath.jpg" width="600" alt=""/>
			</div>
			<div className={styles.descripionBlock}>ava + descripion</div>
		</div>
	)
}

export default ProfileInfo;