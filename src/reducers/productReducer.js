import { LIST_PRODUCTS, GET_PRODUCT_DESCRIPTION, GET_SIMILAR_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  productsListData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return {
        ...state,
        productsListData: action.payload
      };

    case GET_PRODUCT_DESCRIPTION:
      return {
        ...state,
        productDescriptionData: action.payload
      };

    case GET_SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProductsData: action.payload
      };

    default:
      return state;
  }
};
