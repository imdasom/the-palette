import axios from 'axios';

const host = 'localhost';
const port = '3001';
const apiHost = host + ':' + port;

export default {
  create(palette, success, fail) {
    const url = 'http://' + apiHost + '/api/palettes';
    const data = palette;
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios
      .post(url, data, config)
      .then(response => { success(response); })
      .catch(error => { fail(error); });
  }
  ,getPalette(id, success, fail) {
    const url = 'http://' + apiHost + `/api/palettes/${id}`;
    const config = {
      headers: {
        'Return-Type': 'application/json'
      }
    };
    axios
      .get(url, config)
      .then(response => { success(response); })
      .catch(error => { fail(error); });
  }
};
