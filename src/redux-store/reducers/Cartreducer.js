import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "../actions/ActionTypes";

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.findIndex(item => item.idMeal === action.payload.idMeal);
      if (existingItemIndex >= 0) {
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case REMOVE_FROM_CART:
      return state.filter(item => item.idMeal !== action.payload);

    case UPDATE_CART_ITEM:
      return state.map(item =>
        item.idMeal === action.payload.idMeal
          ? { ...item, quantity: item.quantity + action.payload.quantityChange }
          : item
      );
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default CartReducer;
