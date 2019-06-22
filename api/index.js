const http = require('http');
const url = require('url');
const querystring = require('querystring');
const RequestHandler = require('./RequestHandler');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url);
  const method = req.method;
  const pathname = urlInfo.pathname;
  const queryParameter = querystring.parse(urlInfo.query);

  const response = RequestHandler.handle(pathname, method, queryParameter);

  res.statusCode = response.statusCode;
  res.setHeader('Content-Type', response.returnType);
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
