import {SET_SINGLE_ITEM, SET_SINGLE_ITEM_ERROR, SET_SINGLE_ITEM_LOADING } from "../actions/ActionTypes";

const initialState = {
    GetSingleItem: [],
    loading: false,
    error: null,
};

const SingleItemeRducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_ITEM:
            return {
                ...state,
                GetSingleItem: action.payload,
            };
        case SET_SINGLE_ITEM_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case SET_SINGLE_ITEM_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default SingleItemeRducer;
