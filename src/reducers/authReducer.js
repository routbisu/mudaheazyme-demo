import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  isLoggedIn: false,
  productListData: null
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
