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
			const newPost = {};
			newPost.id = 3;
			newPost.text = state.newPostText;
			newPost.likesCount = 0;
			const stateCopy = {...state};
			stateCopy.postsData = [...state.postsData];
			stateCopy.postsData.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			const stateCopy = {...state};
			stateCopy.newPostText = action.newText;
			return stateCopy;
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