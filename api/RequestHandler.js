const PalettesApi = require('./PalettesApi');

function handle(url, method, parameter, requestData) {
  if(url === '/api/palettes') {
    if(method === 'GET') {
      return {
        returnType: 'json'
        ,statusCode: 200
        ,content: PalettesApi.getPalettes(parameter)
      }
    } else if(method === 'POST') {
      return {
        returnType: 'plain/text'
        ,statusCode: 200
        ,content: PalettesApi.create(requestData)
      }
    }
  }
  return {
    returnType: 'text/plain'
    ,statusCode: 200
    ,content: 'Hello World\n' + JSON.stringify(parameter)
  };
}

module.exports = {
  handle: handle
};