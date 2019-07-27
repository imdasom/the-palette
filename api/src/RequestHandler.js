const PalettesApi = require('./PaletteApi');

// POST /api/palettes
// GET /api/palettes
// GET /api/palettes/123
// PUT /api/palettes/123/like
// PUT /api/palettes/123/unlike

const urlMatcher = {
  getPalette: /^(?:\/api\/palettes\b)(?:\/)([\w]+)$/
  ,likePalette: /^(?:\/api\/palettes\b)(?:\/)([\w]+)(\/like)$/
  ,unlikePalette: /^(?:\/api\/palettes\b)(?:\/)([\w]+)(\/unlike)$/
};
function handle(url, method, queryParameter, requestData) {
  if(url.includes('/api/palettes')) {
    const getPaletteUrlExp = url.match(urlMatcher.getPalette);
    const likePaletteUrlExp = url.match(urlMatcher.likePalette);
    const unlikePaletteUrlExp = url.match(urlMatcher.unlikePalette);
    if(likePaletteUrlExp != null) {
      const id = Number(likePaletteUrlExp[1]);
      return {
        returnType: 'plain/text'
        ,statusCode: 200
        ,content: PalettesApi.like(id)
      };
    } else if(unlikePaletteUrlExp != null) {
      const id = Number(unlikePaletteUrlExp[1]);
      return {
        returnType: 'plain/text'
        ,statusCode: 200
        ,content: PalettesApi.unlike(id)
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