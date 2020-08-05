import {profileAPI} from '../api/api';

const ADD_MESSAGE = 'messages/ADD-MESSAGE';
const ADD_MESSAGES_PHOTO = 'messages/ADD_MESSAGES_PHOTO';

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

const initialState = {
	dialogsData: dialogsData,
	messagesData: messagesData,
	messgesPhoto: null
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				messagesData: [...state.messagesData, {
					id: (state.messagesData.length + 1),
					message: action.newMessageText
				}]
			};
		}
		case ADD_MESSAGES_PHOTO: {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state;
	}
}

export const addMessage = (message) => ({
	type: ADD_MESSAGE,
	newMessageText: message
});
const addMessagesPhoto = (messagesPhoto) =>({
	type: ADD_MESSAGES_PHOTO,
	payload: {messagesPhoto}
});

export const getMessagesPhoto = (userId) => async (dispatch) => {
	const data = await profileAPI.getProfile(userId);
	dispatch(addMessagesPhoto(data.photos.small));
}

export default messagesReducer;