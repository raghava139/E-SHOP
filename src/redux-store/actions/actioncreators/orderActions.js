import { SET_ORDERS } from "../ActionTypes";

export const set_Orders = (orders) => {
    return {
        type: SET_ORDERS,
        payload: orders,
    }

}