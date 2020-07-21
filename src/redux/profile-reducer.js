import {profileAPI} from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS ='profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';

const postsData = [
		{id: 1, text: 'Hi. How are you?', likesCount: 12},
		{id: 2, text: "It's my first post.", likesCount: 11}
	]
const initialState = {
	postsData: postsData,
	newPostText: "",
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				postsData: [...state.postsData, {
					id: 3,
					text: action.newText,
					likesCount: 0
				}],
				newPostText: ''
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter(p => p.id !== action.postId)
			}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = (text) => ({
	type: ADD_POST,
	newText: text
});
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile
});
export const setStatus = (status) => ({
	type: SET_STATUS,
	status
});
export const deletePost = (postId) => ({
	type: DELETE_POST,
	postId
});


export const getProfile = (userId) => async (dispatch) => {
	const data = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export default profileReducer;