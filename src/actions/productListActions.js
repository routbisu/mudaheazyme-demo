import { LIST_PRODUCTS } from './actionTypes';
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
