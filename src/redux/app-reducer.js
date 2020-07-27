import {checkLogin} from './auth-reducer';

const SET_INITIALIZED ='SET_INITIALIZED';

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
    default:
      return state;
  }
}

export const initializedSucsess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
  const dispatchResult = dispatch(checkLogin());
  dispatchResult.then(() => {
    dispatch(initializedSucsess());
  });
}

export default appReducer;