import {userAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      }   
    }
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const checkLogin = () => {
  return (dispatch) => {
    userAPI.checkLogin().then(data => {
      if (data.resultCode === 0) {
        const {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  }
}

export const login = (email, password, rememberMe) => (dispatch) => {
  const action = stopSubmit("login", {_error: "Email or password is wrong"});
      dispatch(action);
      return;
  userAPI.login(email, password, rememberMe).then(data => {
    // console.log(data);
    if (data.resultCode === 0) {
      dispatch(checkLogin());
    } else {
      // const message = data.messages > 0 ? data.messages[0] : "Email is wrong";
      // dispatch(stopSubmit("login", {login: message}));
    }
  });
}

export const logout = () => dispatch => {
  userAPI.logout().then(data => {
    dispatch(setAuthUserData(null, null, null, false));
  });
}

export default authReducer;