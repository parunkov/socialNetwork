import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {getFrends} from '../../redux/users-reucer';

const mapStateToProps = (state) => {
	return {
		frends: state.usersPage.frends
	}
}

export default connect(mapStateToProps, {getFrends})(Sidebar);