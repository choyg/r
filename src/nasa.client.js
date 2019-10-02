const Axios = require('axios');
const client = Axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
  params: {
    api_key: process.env.NASA_API_KEY,
  },
});
client.interceptors.response.use(null, err => {
  console.error(err);
  return Promise.reject(err);
});

module.exports.getCuriousityPictures = async () => {
  return (await client.get('/rovers/curiosity/photos', {
    params: {
      sol: 1000,
    }
  })).data.photos;
}