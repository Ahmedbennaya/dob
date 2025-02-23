import axios from 'axios';
import { FETCH_PUPPIES, ADD_PUPPY, UPDATE_PUPPY, DELETE_PUPPY } from '../types';

export const fetchPuppies = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/puppies');
        dispatch({ type: FETCH_PUPPIES, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const addPuppy = (puppy) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/puppies', puppy);
        dispatch({ type: ADD_PUPPY, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const updatePuppy = (id, puppy) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/api/puppies/${id}`, puppy);
        dispatch({ type: UPDATE_PUPPY, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const deletePuppy = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/puppies/${id}`);
        dispatch({ type: DELETE_PUPPY, payload: id });
    } catch (error) {
        console.error(error);
    }
};