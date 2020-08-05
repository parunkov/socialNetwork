import {addPostActionCreator} from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		postsData: state.profile.postsData,
		newPostText: state.profile.newPostText,
		postPhoto: state.messages.messagesPhoto
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (text) => {
			dispatch(addPostActionCreator(text));
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;