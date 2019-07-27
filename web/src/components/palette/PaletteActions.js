import axios from 'axios';
import qs from 'querystring';

const apiHost = process.env.REACT_APP_API_HOST;

export default {
  create(palette, success, fail) {
    const url = apiHost + '/api/palettes';
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
  ,getPalettes(pagination, success, fail) {
    const paginationQuery = qs.stringify(pagination);
    const url = apiHost + `/api/palettes?${paginationQuery}`;
    const config = {
      headers: {
        'Return-Type': 'application/json'
      }
    };
    axios
      .get(url, config)
      .then(response => { success(response); })
      .catch(error => {fail(error); });
  }
  ,getPalette(id, success, fail) {
    const url = apiHost + `/api/palettes/${id}`;
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
    const url = apiHost + `/api/palettes/${id}/like`;
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
  ,unlike(id, success, fail) {
    const url = apiHost + `/api/palettes/${id}/unlike`;
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
