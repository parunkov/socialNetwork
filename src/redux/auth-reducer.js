import {userAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_INITIALIZED ='auth/SET_INITIALIZED';

const initialState = {
  initialized: false,
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
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

export const initializedSucsess = () => ({type: SET_INITIALIZED});

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const initializeApp = () => (dispatch) => {
  const dispatchResult = dispatch(checkLogin());
  dispatchResult.then(() => {
    dispatch(initializedSucsess());
  });
}

export const checkLogin = () => async (dispatch) => {
  const data = await userAPI.checkLogin();
  if (data.resultCode === 0) {
    const {id, login, email} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await userAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(checkLogin());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : "Email or password is wrong";
    dispatch(stopSubmit("login", {_error: message}));
  }
}

export const logout = () => async dispatch => {
  const data = await userAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;