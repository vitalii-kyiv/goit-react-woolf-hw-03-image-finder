import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '37994120-fff0e4792a0f4f4675b43ad43';
// const baseURL = 'https://api.escuelajs.co/api/v1'

export const getImagesApi = async (page = 1, q = '') => {
  const { data } = await axios('', {
    params: {
      key: API_KEY,
      per_page: 12,
      page: page,
      q: q,
    },
  });
  console.log(data);
  return data;
};
console.log(getImagesApi());
