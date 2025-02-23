import { FETCH_PUPPIES, ADD_PUPPY, UPDATE_PUPPY, DELETE_PUPPY } from '../types';

const initialState = {
    puppies: [],
    loading: false,
    error: null,
};

const puppyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PUPPIES:
            return {
                ...state,
                puppies: action.payload,
                loading: false,
            };
        case ADD_PUPPY:
            return {
                ...state,
                puppies: [...state.puppies, action.payload],
            };
        case UPDATE_PUPPY:
            return {
                ...state,
                puppies: state.puppies.map(puppy =>
                    puppy._id === action.payload._id ? action.payload : puppy
                ),
            };
        case DELETE_PUPPY:
            return {
                ...state,
                puppies: state.puppies.filter(puppy => puppy._id !== action.payload),
            };
        default:
            return state;
    }
};

export default puppyReducer;