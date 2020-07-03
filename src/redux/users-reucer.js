import {userAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PGOGRESS ='TOGGLE_IS_FOLLOWING_PGOGRESS';

const initialState = {
	users: [],
	pageSize: 5,
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
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
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

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		userAPI.getUser(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	}
}
export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, userId));
		userAPI.follow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowSucsess(userId));
			}
			dispatch(toggleFollowingInProgress(false, userId));
		});
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, userId));
		userAPI.unfollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSucsess(userId));
			}
			dispatch(toggleFollowingInProgress(false, userId));
		});
	}
}

export default usersReducer;

