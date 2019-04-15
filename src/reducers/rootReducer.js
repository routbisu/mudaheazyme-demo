import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsListReducer from './productListReducer';

export default combineReducers({
  authState: authReducer,
  productsListState: productsListReducer
});
