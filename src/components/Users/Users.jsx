import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import styles from './Users.module.scss';

const Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
		return (

			<div className={styles.usersWrapper}>
				<Paginator 
					totalItemsCount={totalItemsCount} 
					pageSize={pageSize} 
					currentPage={currentPage} 
					onPageChanged={onPageChanged} 
				/>
				<div className={styles.users}>{
						users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)
					}</div>
			</div>
		);
}

export default Users;