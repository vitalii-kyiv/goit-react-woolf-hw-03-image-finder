import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
const API_KEY = '37994120-fff0e4792a0f4f4675b43ad43';
// const baseURL = 'https://api.escuelajs.co/api/v1'

export const getImagesApi = async () => {
  const { data } = await axios('', {
    params: {
      key: API_KEY,
    },
  });
  console.log(data);
  return data;
};
console.log(getImagesApi());
