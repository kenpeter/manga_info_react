// action type
import { LOAD_ALL } from "../actions/types";

// create list
import { utilLoadAll } from "../utils/func";

export default function loadAll() {
  return (dispatch, getState) => {
    // get current data
    let state = getState();
    
    // state, reducer, then prop
    let list = state.loadAll.list;
  
    // The very first time will be nothing.
    dispatch({
      type: LOAD_ALL,
      loadingMore: true,
      list: list // we pass the orig list
    });
    
    
    utilLoadAll().then(function(obj) {
      //console.log("-- start --");
      //console.log(obj.data.manga);
      
      // now we got data
      // http://www.w3schools.com/jsref/jsref_concat_array.asp
      list = obj.data.manga;
      
      // list is increased.
      dispatch({
        type: LOAD_ALL,
        loadingMore: false,
        list: list
      });
      
    });
    
  }
}



