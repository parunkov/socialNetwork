import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.svg';

const Users = (props) => {

	const getUsers = () => {
		if (props.users.length === 0) {

			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
				props.setUsers(response.data.items);
			});		
		}
	}
	// getUsers();

	return (
		<div>
			<button>Ge</button>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
						</div>
						<div>
							{u.followed ? 
								<button onClick={() => {
									props.follow(u.id);
								}}>Unfollow</button>
								: <button button onClick={() => {
									props.unfollow(u.id);
								}}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.city"}</div>
							<div>{"u.location.country"}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	);
}

export default Users;

// const users1 = [
		// 	{
		// 		id: 1, 
		// 		photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 		followed: false, 
		// 		fullName: 'Anna A.', 
		// 		status: 'I am OK', 
		// 		location: {city: 'Moscow', country: 'Russia'}
		// 	},
		// 	{
		// 		id: 2, 
		// 		photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 		followed: true, 
		// 		fullName: 'Maxim A.', 
		// 		status: 'Hey gays', 
		// 		location: {city: 'Tula', country: 'Russia'}
		// 	},
		// 	{
		// 		id: 3, 
		// 		photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 		followed: false, 
		// 		fullName: 'Ivan V.', 
		// 		status: 'The best', 
		// 		location: {city: 'Minsk', country: 'Belarus'}
		// 	},
		// 	{
		// 		id: 4, 
		// 		photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 		followed: false, 
		// 		fullName: 'Andrey P.', 
		// 		status: 'React Redux', 
		// 		location: {city: 'Kiev', country: 'Ukraine'}
		// 	}
		// ];
		// props.setUsers(users1);