import axios from 'axios';

const KEY = '97d56c37e52fb9c99062b6c069ea06b5';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: KEY,
  },
});

// const config = async () => {
//   const result = await movieDb.get('configuration');
//   console.log(result);
// };

// config();
