import { FETCH_TESTIMONIALS, ADD_TESTIMONIAL, DELETE_TESTIMONIAL } from '../types';

const initialState = {
    testimonials: [],
    loading: true,
    error: null,
};

const testimonialReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TESTIMONIALS:
            return {
                ...state,
                testimonials: action.payload,
                loading: false,
            };
        case ADD_TESTIMONIAL:
            return {
                ...state,
                testimonials: [...state.testimonials, action.payload],
            };
        case DELETE_TESTIMONIAL:
            return {
                ...state,
                testimonials: state.testimonials.filter(testimonial => testimonial._id !== action.payload),
            };
        default:
            return state;
    }
};

export default testimonialReducer;