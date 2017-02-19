import { combineReducers } from 'redux';
import loadAll from "./reducers/loadAll";
import chapterLoadAll from "./reducers/chapterLoadAll";
import { routerReducer } from 'react-router-redux';

// any new reducers need to add here.
export default combineReducers({
  loadAll,
  chapterLoadAll,
  routing: routerReducer
});

