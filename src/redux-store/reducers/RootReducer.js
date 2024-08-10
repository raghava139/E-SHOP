import { combineReducers } from 'redux';

import CartReducer from "./Cartreducer";
import CategoryReducer from "./CategoryReducer";
import OrderReducer from "./Orderreducer";
import ProductReducer from './Productreducer';
import CategoryFilterReducer from './CategoryFilterReducer';
import SingleItemeRducer from './SingleItemReducer';


const RootReducer = combineReducers({
  cartdetails: CartReducer,
  categories: CategoryReducer,
  orders: OrderReducer,
  products: ProductReducer,
  categoryfilters: CategoryFilterReducer,
  singlefilter: SingleItemeRducer
});

export default RootReducer;