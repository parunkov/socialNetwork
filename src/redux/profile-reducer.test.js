import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';
// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

const postsData = [
	{id: 1, text: 'Hi. How are you?', likesCount: 12},
	{id: 2, text: "It's my first post.", likesCount: 11}
]
const state = {
	postsData: postsData,
	newPostText: "",
	profile: null,
	status: ""
}

it('new post should be added', () => {
	const action = addPostActionCreator('123');
	const newState = profileReducer(state, action);
	// console.log(newState);
	expect(newState.postsData.length).toBe(3);
});
it('new post text is correct', () => {
	const action = addPostActionCreator('123');
	const newState = profileReducer(state, action);
	expect(newState.postsData[2].text).toBe('123');
});
it('new post likesCount is 0', () => {
	const action = addPostActionCreator('123');
	const newState = profileReducer(state, action);
	expect(newState.postsData[2].likesCount).toBe(0);
});
it('after deleting length of posts should be decrement', () => {
	const action = deletePost(1);
	const newState = profileReducer(state, action);
	// console.log(newState);
	expect(newState.postsData.length).toBe(1);
});
it(`after deleting length of posts shouldn't be decrement if id is incorrect`, () => {
	const action = deletePost(1000);
	const newState = profileReducer(state, action);
	// console.log(newState);
	expect(newState.postsData.length).toBe(2);
});
