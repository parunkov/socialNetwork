import React from 'react';
import {
		follow, 
		unfollow, 
		setCurrentPage, 
		getUsers
	} from './../../redux/users-reucer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from './../../components/common/Preloader/Preloader';
import {getUsersSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {

		return <div>
			{this.props.isFetching ? <Preloader /> : null}
			<Users 
				totalUsersCount={this.props.totalUsersCount} 
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

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// }

const mapStateToProps = (state) => {
	return {
		users: getUsersSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersContainer);