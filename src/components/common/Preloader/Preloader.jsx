import React from 'react';
import preloader from '../../../assets/images/Spin-1s-200px.svg';
import styles from './Preloader.module.css';

const Preloader = (props) => {
	return <img src={preloader} className={styles.preloader} alt="" />
}

export default Preloader;