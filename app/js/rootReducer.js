import { combineReducers } from 'redux';
import loadAll from "./reducers/loadAll";
import { routerReducer } from 'react-router-redux';

// any new reducers need to add here.
export default combineReducers({
  loadAll,
  routing: routerReducer
});

