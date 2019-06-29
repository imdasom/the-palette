import axios from 'axios';

const host = 'localhost';
const port = '3001';
const apiHost = host + ':' + port;

export function create(palette) {
  const url = 'http://' + apiHost + '/api/palettes';
  const data = palette;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios.post(url, data, config)
  .then(function (response) {
    console.log(response);
    alert('success');
  })
  .catch(function (error) {
    console.log(error);
  });
}
