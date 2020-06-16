import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {addPost, updateNewPostText, addMessage, updateMewMessage} from './redux/state';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import state from './redux/state';
// import {subscribe} from './redux/state';
import store from './redux/state';

// console.log(store);
// const state = store._state;

export const rerender = (state) => {
	ReactDOM.render(
	  <React.StrictMode>
	    <App 
	    	store={store} 
	    />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}
rerender(store.getState());

store.subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
