import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/i.webp';
import {NavLink} from 'react-router-dom';
// import * as axios from 'axios';
import {userAPI} from './../../api/api';
console.log(typeof userAPI.follow);

const Users = (props) => {

		const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		const pages = [];

		for (let i = 1; i <= pagesCount ; i += 1) {
			pages.push(i);
		}

		return (

			<div>
				<div className={styles.pagination}>
					{
						pages.map(p => {							
							return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
						})
					}
				</div>
				{
					props.users.map(u => <div key={u.id}>
						<span>
							<div>
								<NavLink to={"/profile/" + u.id}>
									<img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="fff" />
								</NavLink>
							</div>
							<div>
								{u.followed ? 
									<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
										props.unfollow(u.id);
									}}>Unfollow</button>
									: <button disabled={props.followingInProgress.some(id => id === u.id)} button onClick={() => {
										props.follow(u.id);
									}}>Follow</button>}
							</div>
						</span>
						<span>
							<span>
								<div className="">{u.name}</div>
								<div className="">{u.status}</div>
							</span>
							<span>
								<div className="">{"u.location.city"}</div>
								<div className="">{"u.location.country"}</div>
							</span>
						</span>
					</div>)
				}
			</div>
		);
}

export default Users;