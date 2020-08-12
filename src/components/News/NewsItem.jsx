import React from 'react';
import moment from 'moment';
import styles from './News.module.scss';

const NewsItem = ({date, title, text}) => {
	// const dateString = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
	const dateString = moment(date).format('LLL');
	return (
		<div className={styles.newsItem}>
			<div>{dateString}</div>
			<h2>{title}</h2>
			<div>{text}</div>
		</div>
	);
}

export default NewsItem;