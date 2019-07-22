/**
 * 참고 : https://www.dev2qa.com/node-js-http-server-get-post-example/
 */

require('dotenv').config();
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const RequestHandler = require('./RequestHandler');

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT',
  'Access-Control-Max-Age': 2592000, // 30 days,
  'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Return-Type' +
    ',Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
  /** add other headers as per requirement */
};

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url);
  const method = req.method;
  const pathname = urlInfo.pathname;
  const queryParameter = querystring.parse(urlInfo.query);
  let requestData = '';
  const handleRequest = function handleRequest() {
    console.log(`====================================================`);
    console.log(`[${method}] ${pathname}`);
    console.log(`-------------------request--------------------------`);
    console.log(`querystring\n${JSON.stringify(queryParameter)}`);
    console.log(`requestData\n${JSON.stringify(requestData)}`);

    const response = RequestHandler.handle(pathname, method, queryParameter, requestData);

    headers['Content-Type'] = response.returnType;
    res.writeHead(response.statusCode, headers);
    res.end(
      getEndByType(response.returnType, response.content)
    );
    console.log(`-------------------response-------------------------`);
    console.log(response.content);
    console.log(`====================================================`);
  };

  if(method === 'POST') {
    req.on('data', function (data) {
      requestData += data;
    });
    req.on('end', () => {
      requestData = JSON.parse(requestData);
      handleRequest();
    });
  } else {
    handleRequest();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getEndByType(returnType, content) {
  if(returnType === 'json') {
    return JSON.stringify(content);
  } else {
    return content.toString();
  }
}
