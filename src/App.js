import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import {initializeApp} from './redux/app-reducer';
import {connect} from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import {compose} from 'redux';
import {withSuspense} from './hoc/withSuspense';

import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    // alert("Some error occured");
  }

  componentDidMount() {
     this.props.initializeApp();
     window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      // <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/profile" />} />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login/facebook" render={() => <div className="">Facebook</div>} />
              <Route path="/login" render={() => <LoginPage />} />
              <Route path="*" render={() => <div className="">404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

// export default compose(
//   withRouter,
//   connect(mapStateToProps, {initializeApp})
// )(App);

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

const TestApp = (props) => {
  return(
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default TestApp;