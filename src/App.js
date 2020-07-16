import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import {checkLogin, initializeApp} from './redux/auth-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
     // this.props.checkLogin();
     this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      debugger;
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer 
              
             />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer
              
             />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);

// export default connect(null, {checkLogin})(App);
// export default compose (
//   connect(null, {checkLogin}),
//   withRouter
// )(App);
