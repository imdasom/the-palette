/**
 * 참고 : https://www.dev2qa.com/node-js-http-server-get-post-example/
 */

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const RequestHandler = require('./RequestHandler');

const hostname = '127.0.0.1';
const port = 3001;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': 2592000, // 30 days,
  'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type' +
    ',Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
  /** add other headers as per requirement */
};

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url);
  const method = req.method;
  const pathname = urlInfo.pathname;
  const queryParameter = querystring.parse(urlInfo.query);

  console.log(`[${method}] ${pathname}`);

  const response = RequestHandler.handle(pathname, method, queryParameter);

  headers['Content-Type'] = response.returnType;
  res.writeHead(response.statusCode, headers);
  res.end(
    getEndByType(response.returnType, response.content)
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getEndByType(returnType, content) {
  if(returnType === 'json') {
    return JSON.stringify(content);
  } else {
    return content;
  }
}
