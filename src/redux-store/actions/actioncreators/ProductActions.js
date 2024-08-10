import { SET_ERROR, SET_LOADING, SET_PRODUCTS } from "../ActionTypes";

// Action Creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

// Async Action Creator
export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
