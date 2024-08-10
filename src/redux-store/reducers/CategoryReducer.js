import { SET_CATEGORIES, SET_ERROR_CATEGORIES, SET_LOADING_CATEGORIES } from "../actions/ActionTypes";

const initialState = {
    GetCategories: [],
    loading: false,
    error: null,
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                GetCategories: action.payload,
            };
        case SET_LOADING_CATEGORIES:
            return {
                ...state,
                loading: action.payload,
            };
        case SET_ERROR_CATEGORIES:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default CategoryReducer;
