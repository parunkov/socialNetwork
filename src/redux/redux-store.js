import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reucer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	profile: profileReducer,
	messages: messagesReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;