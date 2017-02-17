import axios from "axios";

// clone the array
export function utilLoadAll() {
  // 500 items as a single page
  let apiUrl = "http://www.mangaeden.com/api/list/0";
  
  return axios.get(apiUrl);
}

