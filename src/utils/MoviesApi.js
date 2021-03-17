import { MOVIES_API_OPTIONS } from './constants';
const { baseUrl, headers } = MOVIES_API_OPTIONS;

export function sendRequest(keyword, parameters) {
  return fetch(`${baseUrl}`, parameters)
    .then((res) => {
      if (res.ok) {  
        return res.json();
      }
      return Promise.reject(res.status);
    });
}

export function getMovies(keyword) {
  return sendRequest(keyword, { headers });
}
