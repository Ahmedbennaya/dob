import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import puppyReducer from './reducers/puppyReducer';
import testimonialReducer from './reducers/testimonialReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  puppies: puppyReducer,
  testimonials: testimonialReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;