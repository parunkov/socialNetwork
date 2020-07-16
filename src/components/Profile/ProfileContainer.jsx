import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile, getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push("/login");
			}
		}
		this.props.getProfile(userId);
			this.props.getStatus(userId);
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
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
	withRouter,
)(ProfileContainer);
