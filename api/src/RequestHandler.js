const PalettesApi = require('./PaletteApi');

function handle(url, method, queryParameter, requestData) {
  if(url.includes('/api/palettes')) {
    const getPaletteUrlExp = url.match(/^(?:\/api\/palettes\b)(?:\/)([\w]+)$/);
    const likePaletteUrlExp = url.match(/^(?:\/api\/palettes\b)(?:\/)([\w]+)(\/like)$/);
    if(likePaletteUrlExp != null) {
      const id = Number(likePaletteUrlExp[1]);
      return {
        returnType: 'plain/text'
        ,statusCode: 200
        ,content: PalettesApi.like(id)
      };
    } else if(getPaletteUrlExp != null) {
      const id = Number(getPaletteUrlExp[1]);
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