import React from 'react';
import styles from './Sidebar.module.css';
import userPhoto from '../../assets/images/i.webp';
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

const Sidebar = ({frends}) => {
	console.log(frends);
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__header}>Frends</div>
			{frends.map(item => <SidebarItem key={item.id} userId={item.id} userName={item.name} photo={item.photo} /> )}
		</div>
	)
}

export default Sidebar;