import { SET_CATEGORIES_FILTER, SET_ERROR_CATEGORIES_FILTER, SET_LOADING_CATEGORIES_FILTER } from "../actions/ActionTypes";

const initialState = {
    GetCategoriesFilter: [],
    loading: false,
    error: null,
};

const CategoryFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_FILTER:
            return {
                ...state,
                GetCategoriesFilter: action.payload,
            };
        case SET_LOADING_CATEGORIES_FILTER:
            return {
                ...state,
                loading: action.payload,
            };
        case SET_ERROR_CATEGORIES_FILTER:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default CategoryFilterReducer;
