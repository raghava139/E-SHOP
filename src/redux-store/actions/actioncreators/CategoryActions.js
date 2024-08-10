import axios from "axios";
import { SET_CATEGORIES, SET_ERROR_CATEGORIES, SET_LOADING_CATEGORIES } from "../ActionTypes"


export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}
export const setLoadingCategories = (loading) => ({
    type: SET_LOADING_CATEGORIES,
    payload: loading,
});

export const setErrorCategories = (error) => ({
    type: SET_ERROR_CATEGORIES,
    payload: error,
});

export const FetchCategories = () => async (dispatch) => {
    dispatch(setLoadingCategories(true));
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        dispatch(setCategories(response.data));
    } catch (error) {
        dispatch(setErrorCategories(error.message));
    } finally {
        dispatch(setLoadingCategories(false));
    }
};
