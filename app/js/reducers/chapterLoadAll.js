import { CHAPTER_LOAD_ALL } from "../actions/types";

const initState = {
  loadingMore: false,
  manga: {}
};

// able to fire
export default function chapterLoadAll(state = initState, action = {}) {
  switch(action.type) {
  
    case CHAPTER_LOAD_ALL:
    
      //console.log("-test-");
      //console.log(action.manga);
    
      return {
        loadingMore: action.loadingMore,
        manga: action.manga
      }
    
    default:
      return state;
  }
}





