import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {Route, BrowserRouter} from 'react-router-dom';

const App = (props) => {

  // console.log(props);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs 
            state={props.state.messages} 
            addMessage={props.addMessage} 
            updateMewMessage={props.updateMewMessage}
           />} />
          <Route path="/profile" render={() => <Profile 
            state={props.state.profile} 
            addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText} 
           />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
