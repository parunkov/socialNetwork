import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS ='SET-STATUS';

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


export const getProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId).then(data => {
			dispatch(setUserProfile(data));
		});
	}
}
export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then(response => {
			dispatch(setStatus(response.data));
		})
	}
}
export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then(response => {
			// if (response.data.resultCode === 0) {
				dispatch(setStatus(status));
			// }
		})
	}
}

export default profileReducer;