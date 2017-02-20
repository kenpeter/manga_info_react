import axios from "axios";

export function utilLoadAll() {
  // 500 rows works....
  let apiUrl = "http://www.mangaeden.com/api/list/0?p=0";
  
  //let apiUrl = "http://www.mangaeden.com/api/list/0";
  
  return axios.get(apiUrl);
}


export function utilChapterLoadAll(mangaId) {
  // no https.... no https
  let apiUrl = "http://www.mangaeden.com/api/manga/" + mangaId;
  
  return axios.get(apiUrl);
}


export function utilImgLoadAll(chapterId) {
  // no https.... no https
  let apiUrl = "http://www.mangaeden.com/api/chapter/" + chapterId;
  
  return axios.get(apiUrl);
}
