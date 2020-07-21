const ADD_MESSAGE = 'messages/ADD-MESSAGE';

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
	messagesData: messagesData
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				messagesData: [...state.messagesData, {
					id: 4,
					message: action.newMessageText
				}]
			};
		}
		default:
			return state;
	}
}

export const addMessageActionCreator = (message) => ({
	type: ADD_MESSAGE,
	newMessageText: message
});

export default messagesReducer;