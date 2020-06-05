import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText, addMessage, updateMewMessage} from './redux/state';

export const rerender = (state) => {
	ReactDOM.render(
	  <React.StrictMode>
	    <App 
	    	state={state} 
	    	addPost={addPost} 
	    	updateNewPostText={updateNewPostText} 
	    	addMessage={addMessage} 
	    	updateMewMessage={updateMewMessage} 
	    />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}

