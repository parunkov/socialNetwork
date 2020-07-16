import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile, getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
// import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			// userId = 9022;
			// console.log(window.store.getState());
			// debugger;
			userId = this.props.authorizedUserId;
		}
		this.props.getProfile(userId);
		// setTimeout(() => {
			this.props.getStatus(userId);
		// }, 1000);
	}
	render() {
		return (
			<Profile 
				{...this.props} 
				profile={this.props.profile} 
				status={this.props.status} 
				updateStatus={this.props.updateStatus} 
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	status: state.profile.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
	withRouter,
	// withAuthRedirect
)(ProfileContainer);
