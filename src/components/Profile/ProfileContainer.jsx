import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile, getProfile, getStatus, updateStatus, savePhoto, savePhotoSucsess} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';


class ProfileContainer extends React.Component {
	refreshProfile() {
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
	componentDidMount() {
		this.refreshProfile();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}
	render() {
		return (
			<Profile 
				{...this.props} 
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile} 
				status={this.props.status} 
				updateStatus={this.props.updateStatus} 
				savePhoto={this.props.savePhoto}
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
	connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus, savePhoto, savePhotoSucsess}),
	withRouter,
)(ProfileContainer);
