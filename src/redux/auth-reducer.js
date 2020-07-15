import {userAPI} from '../api/api';

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
  userAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(checkLogin());
    }
  });
}

export const logout = () => dispatch => {
  userAPI.logout().then(data => {
    dispatch(setAuthUserData(null, null, null, false));
  });
}

export default authReducer;