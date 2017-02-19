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
      
      let tmpData = obj.data.manga;
      
			tmpData.sort(function(a, b) {
			  return b.h - a.h; // switch it, so get descending
			});

      // list is increased.
      dispatch({
        type: LOAD_ALL,
        loadingMore: false,
        list: tmpData
      });
      
    });
    
  }
}



