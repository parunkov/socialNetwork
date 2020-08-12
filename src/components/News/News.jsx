import React from 'react';
import {createField, Input, Textarea} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {reduxForm} from 'redux-form';
import NewsItem from './NewsItem';
import styles from './News.module.scss';

const NewsForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<b>News title:</b>
			</div>
			<div>
				{createField('News title', 'newsTitle', Input, [required])}
			</div>
			<div>
				<b>News text:</b>
			</div>
			<div>
				{createField('News text', 'newsText', Textarea, [required])}
			</div>
			<button type="submit">Add news</button>
		</form>
	)
}

const NewsReduxForm = reduxForm({
	form: 'news'
})(NewsForm);


const News = ({news, addNews}) => {

	const onSubmit = (formData) => addNews(new Date(), formData.newsTitle, formData.newsText);

	const newsElements = news.map(news => <NewsItem key={news.id} date={news.date} title={news.title} text={news.text} />);

	return (
		<div className={styles.news}>
			<div className={styles.form}>
				<h2 className="">Add news</h2>
				<NewsReduxForm onSubmit={onSubmit} />
			</div>
			<div className={styles.newsList}>
				<h1>News list</h1>
				<div className="">
					{newsElements}
				</div>
			</div>
		</div>
	);
}

export default News;