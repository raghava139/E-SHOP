import axios from "axios";
import { SET_CATEGORIES_FILTER, SET_ERROR_CATEGORIES_FILTER, SET_LOADING_CATEGORIES_FILTER } from "../ActionTypes"


export const setFilterCategories = (categories) => {
    return {
        type: SET_CATEGORIES_FILTER,
        payload: categories
    }
}
export const setFilterLoadingCategories = (loading) => ({
    type: SET_LOADING_CATEGORIES_FILTER,
    payload: loading,
});

export const setFilterErrorCategories = (error) => ({
    type: SET_ERROR_CATEGORIES_FILTER,
    payload: error,
});

export const FetchFilterCategories = (CategoryName) => async (dispatch) => {
    dispatch(setFilterLoadingCategories(true));
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CategoryName}`);

        // Modify the response data to include random prices
        const modifiedData = {
            ...response.data,
            meals: response.data.meals.map(meal => ({
                ...meal,
                price: generateRandomPrice() // Add random price to each meal
            }))
        };

        dispatch(setFilterCategories(modifiedData));
    } catch (error) {
        dispatch(setFilterErrorCategories(error.message));
    } finally {
        dispatch(setFilterLoadingCategories(false));
    }
};

// Function to generate a random price starting from 500
const generateRandomPrice = () => {
    const minPrice = 500;
    const maxPrice = 1000; // Define a maximum value for the random price
    return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
};

