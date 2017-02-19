// action type
import { CHAPTER_LOAD_ALL } from "../actions/types";

// create list
import { utilChapterLoadAll } from "../utils/func";

export default function chapterLoadAll(mangaId) {

  return (dispatch, getState) => {
    // get current data
    let state = getState();
    
    // state, reducer, then prop
    let manga = state.chapterLoadAll.manga;
  
    // The very first time will be nothing.
    dispatch({
      type: CHAPTER_LOAD_ALL,
      loadingMore: true,
      manga: manga
    });
    
    
    utilChapterLoadAll(mangaId).then(function(obj) {
      
      dispatch({
        type: CHAPTER_LOAD_ALL,
        loadingMore: false,
        manga: obj.data
      });
      
    });
    
  }
}



