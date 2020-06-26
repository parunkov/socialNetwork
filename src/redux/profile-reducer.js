const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

const postsData = [
		{id: 1, text: 'Hi. How are you?', likesCount: 12},
		{id: 2, text: "It's my first post.", likesCount: 11}
	]
const initialState = {
	postsData: postsData,
	newPostText: ""
}

const profileReducer = (state = initialState, action) => {
	// debugger;
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				postsData: [...state.postsData, {
					id: 3,
					text: state.newPostText,
					likesCount: 0
				}],
				newPostText: ''
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({
	type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
});

export default profileReducer;