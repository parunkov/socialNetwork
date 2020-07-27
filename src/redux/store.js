import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';

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
	}, 
	sidebar: {}
}

let store = {
	_state: stateCreate,

	_callSubscriber () {

	},

	getState () {
		return this._state;
	},

	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch (action) {
		this._state.profile = profileReducer(this._state.profile, action);
		this._state.messages = messagesReducer(this._state.messages, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}

export default store;