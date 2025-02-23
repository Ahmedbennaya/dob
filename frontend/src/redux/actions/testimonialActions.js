import axios from 'axios';
import { FETCH_TESTIMONIALS, ADD_TESTIMONIAL, DELETE_TESTIMONIAL } from '../types';

export const fetchTestimonials = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/testimonials');
        dispatch({ type: FETCH_TESTIMONIALS, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const addTestimonial = (testimonial) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/testimonials', testimonial);
        dispatch({ type: ADD_TESTIMONIAL, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const deleteTestimonial = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/testimonials/${id}`);
        dispatch({ type: DELETE_TESTIMONIAL, payload: id });
    } catch (error) {
        console.error(error);
    }
};