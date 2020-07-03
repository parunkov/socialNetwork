import React from 'react';
import {
		follow, 
		unfollow, 
		setUsers, 
		setCurrentPage, 
		setTotalUsersCount, 
		toggleIsFetching
	} from './../../redux/users-reucer';
import {connect} from 'react-redux';
// import * as axios from 'axios';
import Users from './Users';
import Preloader from './../../components/common/Preloader/Preloader';
import {userAPI} from './../../api/api';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		userAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		userAPI.getUser(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		});
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
			/>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);