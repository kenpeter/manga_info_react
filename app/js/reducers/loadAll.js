import { LOAD_ALL } from "../actions/types";

const initState = {
  loadingMore: false,
  list: []
};

// able to fire
export default function loadAll(state = initState, action = {}) {
  switch(action.type) {
  
    case LOAD_ALL:
      return {
        loadingMore: action.loadingMore,
        list: action.list
      }
    
    default:
      return state;
  }
}





