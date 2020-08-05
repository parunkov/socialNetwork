import React from 'react';
import {
		follow, 
		unfollow, 
		setCurrentPage, 
		getUsers,
		getFrends
	} from './../../redux/users-reucer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from './../../components/common/Preloader/Preloader';
import {getUsersSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

	componentDidMount() {
		const {currentPage, pageSize} = this.props;
		this.props.getUsers(currentPage, pageSize);
		this.props.getFrends(JSON.parse(localStorage.getItem('frends')));
	}

	onPageChanged = (pageNumber) => {
		const {setCurrentPage, getUsers, pageSize} = this.props;
		setCurrentPage(pageNumber);
		getUsers(pageNumber, pageSize);
	}

	componentDidUpdate(prevProps) {
		if (this.props.frends !== prevProps.frends) {
			localStorage.setItem('frends', JSON.stringify(this.props.frends));
		}
	}

	render() {

		return <div>
			{this.props.isFetching ? <Preloader /> : null}
			<Users 
				totalItemsCount={this.props.totalUsersCount} 
				pageSize={this.props.pageSize} 
				currentPage={this.props.currentPage} 
				onPageChanged={this.onPageChanged} 
				users={this.props.users} 
				follow={this.props.follow} 
				unfollow={this.props.unfollow} 
				toggleFollowingInProgress={this.props.toggleFollowingInProgress} 
				followingInProgress={this.props.followingInProgress} 
			/>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		users: getUsersSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		frends: state.usersPage.frends
	}
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers, getFrends})(UsersContainer);