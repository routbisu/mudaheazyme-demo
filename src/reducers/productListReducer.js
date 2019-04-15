import { LIST_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  productListData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return {
        ...state,
        productListData: action.payload
      };

    default:
      return state;
  }
};
