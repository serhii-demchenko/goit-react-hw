import axios from 'axios';
const API_KEY = '19124280-93d625947beade68d0b63bb4e';

export function requestPhotos({ query, page }) {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
}
