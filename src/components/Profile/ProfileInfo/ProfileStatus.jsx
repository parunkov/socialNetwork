import React from 'react';
// import styles from './ProfileInfo.module.css';
// import Preloader from '../../common/Preloader/Preloader';

const ProfileStatus = (props) => {
	return (
		<div>
			<div>
				<span>{props.status}</span>
			</div>
			<div>
				<input type="text" value={props.status} />
			</div>
		</div>
	)
}

export default ProfileStatus;