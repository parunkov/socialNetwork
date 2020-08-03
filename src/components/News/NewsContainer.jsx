import News from './News';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		// date: state.news.news.date,
		// title: state.news.news.title,
		// text: state.news.news.text
		news: state.news.news
	}
}

export default connect(mapStateToProps, {})(News);
