import React from 'react';
import {createField, Input, Textarea} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {reduxForm} from 'redux-form';
import NewsItem from './NewsItem';

const NewsForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="">
				<b>News title:</b>
			</div>
			<div className="">
				{createField('News title', 'newsTitle', Input, [required])}
			</div>
			<div className="">
				<b>News text:</b>
			</div>
			<div className="">
				{createField('News text', 'newsText', Textarea, [required])}
			</div>
			<button type="submit">Add news</button>
		</form>
	)
}

const NewsReduxForm = reduxForm({
	form: 'news'
})(NewsForm);


const News = ({news}) => {

	const newsElements = news.map(news => <NewsItem key={news.id} date={news.date} title={news.title} text={news.text} />);

	return (
		<div>
			<h2 className="">Add news</h2>
			<NewsReduxForm />
			<h1>News list</h1>
			<div className="">
				{newsElements}
			</div>
		</div>
	);
}

export default News;