const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MEW_MESSAGE = 'UPDATE-MEW-MESSAGE';

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
	newMessageText: ""
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			const newMessage = {};
			newMessage.id = 4;
			const stateCopy = {...state};
			stateCopy.messagesData = [...state.messagesData];
			newMessage.message = state.newMessageText;
			stateCopy.messagesData.push(newMessage);
			stateCopy.newMessageText = '';
			return stateCopy;
		}
		case UPDATE_MEW_MESSAGE: {
			const stateCopy = {...state};
			stateCopy.newMessageText = action.newMessage;
			return stateCopy;
		}
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE
});
export const updateNewMessageActionCreator = (message) => ({
	type: UPDATE_MEW_MESSAGE,
	newMessage: message
});

export default messagesReducer;