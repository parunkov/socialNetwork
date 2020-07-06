import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile, getProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getProfile(userId);
	}
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	isAuth: state.auth.isAuth
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);