const PalettesApi = require('./PaletteApi');

function handle(url, method, queryParameter, requestData) {
  if(url.includes('/api/palettes')) {
    const urlMatch = url.match(/^(?:\/api\/palettes\b)(?:\/)([\w]+)$/);
    if(urlMatch != null) {
      const id = Number(urlMatch[1]);
      return {
        returnType: 'json'
        ,statusCode: 200
        ,content: PalettesApi.getPalette(id)
      }
    } else if(url === '/api/palettes') {
      if(method === 'GET') {
        return {
          returnType: 'json'
          ,statusCode: 200
          ,content: PalettesApi.getPalettesWithPagination(queryParameter)
        }
      } else if(method === 'POST') {
        return {
          returnType: 'plain/text'
          ,statusCode: 200
          ,content: PalettesApi.create(requestData)
        }
      }
    }
  }
  return {
    returnType: 'text/plain'
    ,statusCode: 200
    ,content: 'Hello World\n' + JSON.stringify(queryParameter)
  };
}

module.exports = {
  handle: handle
};