// action type
import { IMG_LOAD_ALL } from "../actions/types";

// create list
import { utilImgLoadAll } from "../utils/func";

export default function imgLoadAll(chapterId) {


  return (dispatch, getState) => {
  
    //test
    //console.log("call....");
  
    // get current data
    let state = getState();
    
    // state, reducer, then prop
    let imgs = state.imgLoadAll.imgs;
  
    // The very first time will be nothing.
    dispatch({
      type: IMG_LOAD_ALL,
      loadingMore: true,
      imgs: imgs
    });
    
    
    utilImgLoadAll(chapterId).then(function(obj) {
      
      //test
      //console.log(obj);
      
      dispatch({
        type: IMG_LOAD_ALL,
        loadingMore: false,
        imgs: obj.data // bug?????????????????????????????
      });
      
    });
    
  }
}



