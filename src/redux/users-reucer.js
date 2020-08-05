import {userAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING ='users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PGOGRESS ='users/TOGGLE_IS_FOLLOWING_PGOGRESS';

const initialState = {
	users: [],
	frends: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}),
				frends: state.frends.filter(item => item.id !== action.userId)
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
				frends: [...state.frends, {
					id: action.userId,
					name: state.users.filter(item => item.id === action.userId)[0].name,
					photo: state.users.filter(item => item.id === action.userId)[0].photos.small
				}]
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: action.users
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.count
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case TOGGLE_IS_FOLLOWING_PGOGRESS: {
			return {
				...state,
				followingInProgress: action.followingInProgress
				? [...state.followingInProgress, action.userId]
				: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state;
	}
}

export const followSucsess = (userId) => ({
	type: FOLLOW,
	userId
});

export const unfollowSucsess = (userId) => ({
	type: UNFOLLOW,
	userId
});

export const setUsers = (users) => ({
	type: SET_USERS,
	users
});
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage
});
export const setTotalUsersCount = (count) => ({
	type: SET_TOTAL_USERS_COUNT,
	count
});
export const toggleIsFetching = (isFetching) => ({
	type:TOGGLE_IS_FETCHING,
	isFetching
});
export const toggleFollowingInProgress = (followingInProgress, userId) => ({
	type:TOGGLE_IS_FOLLOWING_PGOGRESS,
	followingInProgress,
	userId
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	const data = await userAPI.getUser(currentPage, pageSize);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) => {
	dispatch(toggleFollowingInProgress(true, userId));
	const data = await apiMethod(userId);
	if (data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
	followUnfollowFlow(userId, dispatch, userAPI.follow.bind(userAPI), unfollowSucsess);
}

export const unfollow = (userId) => async (dispatch) => {
	followUnfollowFlow(userId, dispatch, userAPI.unfollow.bind(userAPI), followSucsess);
}

export default usersReducer;

