import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import NewsContainer from './components/News/NewsContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import {initializeApp} from './redux/app-reducer';
import { getFrends } from './redux/users-reucer';
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

  constructor(props) {
    super(props);
    this.state = {
      menuShown: true,
      windowWidth: window.innerWidth
    };
  }

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    // alert("Some error occured");
  }

  componentDidMount() {
     this.props.initializeApp();
     window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
     this.props.getFrends(JSON.parse(localStorage.getItem('frends')));
     window.addEventListener("resize", this.updateWidth);
     this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth = () => {
    this.setState({windowWidth: window.innerWidth});
    if (window.innerWidth > 700) {
      this.setState({menuShown: true});
    } else {
      this.setState({menuShown: false});
    }
  }

  toggleMenu = () => {
    this.setState({menuShown: !this.state.menuShown});
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      // <BrowserRouter>
        <div className="app">
          <Header menuShown={this.state.menuShown} toggleMenu={this.toggleMenu} />
          <div className="app-wrapper">
            <Navbar menuShown={this.state.menuShown} />
            <div className="app-wrapper-content">
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/profile" />} />
                <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/news" render={() => <NewsContainer />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login/facebook" render={() => <div className="">Facebook</div>} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="*" render={() => <div className="">404 NOT FOUND</div>} />
              </Switch>
            </div>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  frends: state.usersPage.frends
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp, getFrends})
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