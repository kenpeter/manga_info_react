import { IMG_LOAD_ALL } from "../actions/types";

const initState = {
  loadingMore: false,
  imgs: []
};

// able to fire
export default function imgLoadAll(state = initState, action = {}) {
  switch(action.type) {
  
    case IMG_LOAD_ALL:
      return {
        loadingMore: action.loadingMore,
        imgs: action.imgs
      }
    
    default:
      return state;
  }
}





