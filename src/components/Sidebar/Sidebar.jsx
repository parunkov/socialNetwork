import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__header}>Frends</div>
			<div className={styles.sidebar__item}>
				<div className={styles.sidebar__name}>Andrey</div>
				<img src="https://www.1zoom.ru/big2/30/147941-aleni.jpg" alt="" className={styles.sidebar__avatar}/>
			</div>
			<div className={styles.sidebar__item}>
				<div className={styles.sidebar__name}>Galina</div>
				<img src="https://www.1zoom.ru/big2/30/147941-aleni.jpg" alt="" className={styles.sidebar__avatar}/>
			</div>
			<div className={styles.sidebar__item}>
				<div className={styles.sidebar__name}>Anna</div>
				<img src="https://www.1zoom.ru/big2/30/147941-aleni.jpg" alt="" className={styles.sidebar__avatar}/>
			</div>
		</div>
	)
}

export default Sidebar;