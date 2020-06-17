// import {rerender} from './../index';
// let rerender = () => {
// 	console.log('State is changed');
// }

const data = ['Andrey', 'Galina', 'Anna', 'Maxim', 'Tanya'];
	const dialogsData = [];
	for (let i = 0; i < data.length; i++) {
		dialogsData[i] = {};
		dialogsData[i].id = i + 1;
		dialogsData[i].name = data[i];
	}
const messages = ['Hi', 'How are you?', 'Yo'];
	const messagesData = [];
	for (let i = 0; i < messages.length; i++) {
		messagesData[i] = {};
		messagesData[i].id = i + 1;
		messagesData[i].message = messages[i];
	}
const postsData = [
		{id: 1, text: 'Hi. How are you?', likesCount: 12},
		{id: 2, text: "It's my first post.", likesCount: 11}
	]

const stateCreate = {
	messages: {
		dialogsData: dialogsData,
		messagesData: messagesData,
		newMessageText: ""
	},
	profile: {
		postsData: postsData,
		newPostText: ""
	}
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MEW_MESSAGE = 'UPDATE-MEW-MESSAGE';

let store = {
	_state: stateCreate,

	_callSubscriber () {

	},

	getState () {
		// debugger;
		return this._state;
	},

	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch (action) {
		if (action.type === ADD_POST) {
			const newPost = {};
			newPost.id = 3;
			newPost.text = this._state.profile.newPostText;
			newPost.likesCount = 0;
			this._state.profile.postsData.push(newPost);
			this._state.profile.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profile.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE) {
			const newMessage = {};
			newMessage.id = 4;
			newMessage.message = this._state.messages.newMessageText;
			this._state.messages.messagesData.push(newMessage);
			this._state.messages.newMessageText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_MEW_MESSAGE) {
			this._state.messages.newMessageText = action.newMessage;
			this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({
	type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
});
export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE
});
export const updateNewMessageActionCreator = (message) => ({
	type: UPDATE_MEW_MESSAGE,
	newMessage: message
});

export default store;