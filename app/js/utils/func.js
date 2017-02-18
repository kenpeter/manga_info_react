import axios from "axios";

// clone the array
export function utilLoadAll() {
  // 500 rows works....
  //let apiUrl = "http://www.mangaeden.com/api/list/0?p=0";
  
  let apiUrl = "http://www.mangaeden.com/api/list/0";
  
  return axios.get(apiUrl);
}

