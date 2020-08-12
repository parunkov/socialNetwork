import React from 'react';
import styles from './Users.module.scss';
import userPhoto from './../../assets/images/user.svg';
import {NavLink} from 'react-router-dom';
import FollowButton from '../common/Button/FollowButton';

const User = ({user, followingInProgress, unfollow, follow}) => {
	return (
		<div className={styles.user}>
			<span>
				<div>
					<NavLink to={"/profile/" + user.id}>
						<img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="fff" />
					</NavLink>
				</div>
				<FollowButton followed={user.followed} userId={user.id} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />
			</span>
			<span>
				<span>
					<h3 className={styles.userTitle}>{user.name}</h3>
					<div>{user.status}</div>
				</span>
			</span>
		</div>
	);
}

export default User;