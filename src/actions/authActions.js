import { LOGIN, LOGOUT } from './actionTypes';

// User Mock login
export const login = () => dispatch => {
  dispatch({
    type: LOGIN,
    payload: {
      login: true
    }
  });
};

// User Mock logout
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: {
      login: false
    }
  });
};
