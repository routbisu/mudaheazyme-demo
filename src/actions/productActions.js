import { LIST_PRODUCTS, GET_PRODUCT_DESCRIPTION, GET_SIMILAR_PRODUCTS } from './actionTypes';
import axios from 'axios';

// User Product Listing
export const listProducts = () => dispatch => {
  axios.get('http://5b35ede16005b00014c5dc86.mockapi.io/list').then(res => {
    // Make a callback to the parent with user details from api
    dispatch({
      type: LIST_PRODUCTS,
      payload: res.data && res.data.data
    });
  });
};

// Product Description
export const getProductDescription = itemId => dispatch => {
  axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/view/${itemId}`).then(res => {
    // Make a callback to the parent with user details from api
    dispatch({
      type: GET_PRODUCT_DESCRIPTION,
      payload: res.data && res.data.data
    });
  });
};

// Similar Products
export const listSimilarProducts = itemId => dispatch => {
  axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/similar/${itemId}`).then(res => {
    // Make a callback to the parent with user details from api
    dispatch({
      type: GET_SIMILAR_PRODUCTS,
      payload: res.data && res.data.data
    });
  });
};
