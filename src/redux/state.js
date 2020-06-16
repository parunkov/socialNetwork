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

// export const addPost = () => {
// 	const newPost = {};
// 	newPost.id = 3;
// 	newPost.text = state.profile.newPostText;
// 	newPost.likesCount = 0;
// 	state.profile.postsData.push(newPost);
// 	state.profile.newPostText = '';
// 	rerender(state);
// }

// export const updateNewPostText = (newText) => {
// 	state.profile.newPostText = newText;
// 	rerender(state);
// }

// export const addMessage = () => {
// 	const newMessage = {};
// 	newMessage.id = 4;
// 	newMessage.message = state.messages.newMessageText;
// 	state.messages.messagesData.push(newMessage);
// 	state.messages.newMessageText = '';
// 	rerender(state);
// }

// export const updateMewMessage = (newMessage) => {
// 	state.messages.newMessageText = newMessage;
// 	rerender(state);
// }

// export const subscribe = (observer) => {
// 	rerender = observer;
// }

let store = {
	_state: stateCreate,

	_callSubscriber () {

	},

	getState () {
		// debugger;
		return this._state;
	},

	addPost () {
		const newPost = {};
		newPost.id = 3;
		newPost.text = this._state.profile.newPostText;
		newPost.likesCount = 0;
		this._state.profile.postsData.push(newPost);
		this._state.profile.newPostText = '';
		this._callSubscriber(this._state);
	},

	updateNewPostText (newText) {
		console.log(this);
		// debugger;
		this._state.profile.newPostText = newText;
		this._callSubscriber(this._state);
	},

	addMessage () {
		const newMessage = {};
		newMessage.id = 4;
		newMessage.message = this._state.messages.newMessageText;
		this._state.messages.messagesData.push(newMessage);
		this._state.messages.newMessageText = '';
		this._callSubscriber(this._state);
	},

	updateMewMessage (newMessage) {
		this._state.messages.newMessageText = newMessage;
		this._callSubscriber(this._state);
	},

	subscribe (observer) {
		this._callSubscriber = observer;
	}
}

// console.log(store._state);

// export {store};

export default store;