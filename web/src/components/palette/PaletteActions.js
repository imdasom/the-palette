import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.API_HOST;
const port = process.env.API_PORT;
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
  ,like(id, success, fail) {
    const url = 'http://' + apiHost + `/api/palettes/${id}/like`;
    const config = {
      headers: {
        'Return-Type': 'plain/text'
      }
    };
    axios
      .put(url, null, config)
      .then(response => { success(response); })
      .catch(error => { fail(error); })
  }
};
