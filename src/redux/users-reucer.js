const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1
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
		default:
			return state;
	}
}

export const followAC = (userId) => ({
	type: FOLLOW,
	userId
});

export const unfollowAC = (userId) => ({
	type: UNFOLLOW,
	userId
});

export const setUsersAC = (users) => ({
	type: SET_USERS,
	users
});
export const setCurrentPageAC = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage
});

export default usersReducer;

// {
		// 	id: 1, 
		// 	photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 	followed: false, 
		// 	fullName: 'Anna A.', 
		// 	status: 'I am OK', 
		// 	location: {city: 'Moscow', country: 'Russia'}
		// },
		// {
		// 	id: 2, 
		// 	photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 	followed: true, 
		// 	fullName: 'Maxim A.', 
		// 	status: 'Hey gays', 
		// 	location: {city: 'Tula', country: 'Russia'}
		// },
		// {
		// 	id: 3, 
		// 	photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 	followed: false, 
		// 	fullName: 'Ivan V.', 
		// 	status: 'The best', 
		// 	location: {city: 'Minsk', country: 'Belarus'}
		// },
		// {
		// 	id: 4, 
		// 	photoUrl: 'https://www.1zoom.ru/big2/30/147941-aleni.jpg', 
		// 	followed: false, 
		// 	fullName: 'Andrey P.', 
		// 	status: 'React Redux', 
		// 	location: {city: 'Kiev', country: 'Ukraine'}
		// }