import React from 'react';
import styles from './Sidebar.module.css';
import userPhoto from '../../assets/images/user.svg';
import {NavLink} from 'react-router-dom';

const SidebarItem = ({userId, userName, photo}) => {
	return (
		<div className={styles.sidebar__item}>
			<NavLink to={"/profile/" + userId} className={styles.sidebar__name}>
				{userName}
			</NavLink>
			<NavLink to={"/profile/" + userId}>
				<img src={photo !== null ? photo : userPhoto} alt="" className={styles.sidebar__avatar}/>
			</NavLink>
		</div>
	)
}

const Sidebar = ({frends, getFrends}) => {
	const onClearBtnClick = () => {
		localStorage.setItem('frends', JSON.stringify([]));
		getFrends([]);
	}

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__header}>Frends</div>
			{frends.map(item => <SidebarItem key={item.id} userId={item.id} userName={item.name} photo={item.photo} /> )}
			{(frends.length !== 0) && <button onClick={onClearBtnClick}>Clear all</button>}
		</div>
	)
}

export default Sidebar;