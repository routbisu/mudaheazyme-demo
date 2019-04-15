import { LOGIN, LOGOUT } from './actionTypes';

// User Mock login
export const login = () => dispatch => {
  dispatch({
    type: LOGIN
  });
};

// User Mock logout
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
