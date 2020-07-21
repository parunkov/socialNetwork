import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/i.webp';
import {NavLink} from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
	return (
		<div className="">
			<span>
				<div>
					<NavLink to={"/profile/" + user.id}>
						<img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="fff" />
					</NavLink>
				</div>
				<div>
					{user.followed ? 
						<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
							unfollow(user.id);
						}}>Unfollow</button>
						: <button disabled={followingInProgress.some(id => id === user.id)} button onClick={() => {
							follow(user.id);
						}}>Follow</button>}
				</div>
			</span>
			<span>
				<span>
					<div className="">{user.name}</div>
					<div className="">{user.status}</div>
				</span>
				<span>
					<div className="">{"user.location.city"}</div>
					<div className="">{"user.location.country"}</div>
				</span>
			</span>
		</div>
	);
}

export default User;