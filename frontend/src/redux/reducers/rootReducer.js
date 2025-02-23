import { combineReducers } from 'redux';
import puppyReducer from './puppyReducer';
import testimonialReducer from './testimonialReducer';

const rootReducer = combineReducers({
    puppy: puppyReducer,
    testimonial: testimonialReducer,
});

export default rootReducer;