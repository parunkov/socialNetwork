import React from 'react';
import moment from 'moment';

const NewsItem = ({date, title, text}) => {
	// const dateString = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
	const dateString = moment(date).format('LLL');
	return (
		<div>
			<div className="">{dateString}</div>
			<h2 className="">{title}</h2>
			<div className="">{text}</div>
		</div>
	);
}

export default NewsItem;