import Sidebar from './Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		frends: state.usersPage.frends
	}
}

export default connect(mapStateToProps, {})(Sidebar);