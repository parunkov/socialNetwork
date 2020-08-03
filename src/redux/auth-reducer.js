import {userAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_INITIALIZED = 'auth/SET_INITIALIZED';
const GET_CAPTCHA_URL_SUCSESS = 'auth/GET_CAPTCHA_URL_SUCSESS';

const initialState = {
  initialized: false,
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
    case SET_USER_DATA: 
    case GET_CAPTCHA_URL_SUCSESS: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
}

export const initializedSucsess = () => ({type: SET_INITIALIZED});

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA, 
  payload: {id, email, login, isAuth, captchaUrl: null}});

export const getCaptchaUrlSucsess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCSESS,
  payload: {captchaUrl}
});

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

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await userAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(checkLogin());
  } else { 
    if (data.resultCode === 10) {
       dispatch(getCaptchaUrl());
    }
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

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSucsess(captchaUrl));
}

export default authReducer;