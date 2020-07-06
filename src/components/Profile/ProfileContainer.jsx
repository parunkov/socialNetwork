import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile, getProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


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

// const mapStateToPropsForRedirect = (state) => ({
// 	isAuth: state.auth.isAuth
// });

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);


const mapStateToProps = (state) => ({
	profile: state.profile.profile
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);