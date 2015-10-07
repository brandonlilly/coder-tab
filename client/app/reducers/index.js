import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import error from './error';

const rootReducer = combineReducers({
  error,
  router
});

export default rootReducer;
