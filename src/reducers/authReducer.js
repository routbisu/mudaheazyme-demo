import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  productsListData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};
