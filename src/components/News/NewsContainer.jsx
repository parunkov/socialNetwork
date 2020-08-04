import News from './News';
import {connect} from 'react-redux';
import {addNews} from '../../redux/news-reducer';

const mapStateToProps = (state) => {
	return {
		news: state.news.news
	}
}

export default connect(mapStateToProps, {addNews})(News);
