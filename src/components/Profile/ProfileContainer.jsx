import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile, getProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
// import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


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
	profile: state.profile.profile
});

export default compose(
	connect(mapStateToProps, {setUserProfile, getProfile}),
	withRouter,
	// withAuthRedirect
)(ProfileContainer);
