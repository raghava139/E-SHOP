import axios from "axios";
import { SET_SINGLE_ITEM, SET_SINGLE_ITEM_ERROR, SET_SINGLE_ITEM_LOADING } from "../ActionTypes"


export const setSingleItem = (categories) => {
    return {
        type: SET_SINGLE_ITEM,
        payload: categories
    }
}
export const setSingleItemLoading = (loading) => ({
    type: SET_SINGLE_ITEM_LOADING,
    payload: loading,
});

export const setSingleItemError = (error) => ({
    type: SET_SINGLE_ITEM_ERROR,
    payload: error,
});

export const FetchBySingleItem = (categoryID, price) => async (dispatch) => {
    dispatch(setSingleItemLoading(true));
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categoryID}`);
        const itemWithPrice = {
            ...response.data,
            meals: response.data.meals.map(meal => ({
                ...meal,
                price: price
            }))
        };
        dispatch(setSingleItem(itemWithPrice));
    } catch (error) {
        dispatch(setSingleItemError(error.message));
    } finally {
        dispatch(setSingleItemLoading(false));
    }
};
