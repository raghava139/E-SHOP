import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "../ActionTypes";

export const add_to_cart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    }
}
export const remove_from_cart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId
});

// Action to update item quantity
export const update_cart_item = (itemId, quantityChange) => ({
    type: UPDATE_CART_ITEM,
    payload: { idMeal: itemId, quantityChange }
});



export const clear_cart = () => ({
    type: CLEAR_CART
});