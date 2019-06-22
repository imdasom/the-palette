const should = require('should');
const url = require('url');
describe('url', function() {
  it('url path test', function() {
    const urlObj = url.parse('/api/palettes?page=1&pageSize=10', true, false);
    urlObj.path.should.equal('/api/palettes?page=1&pageSize=10');
  });
  it('url pathname test', function() {
    const urlObj = url.parse('/api/palettes?page=1&pageSize=10', true, false);
    urlObj.pathname.should.equal('/api/palettes');
  });
  it('url query string test', function() {
    const urlObj = url.parse('/api/palettes?page=1&pageSize=10', true, false);
    urlObj.query.should.equal('page=1&pageSize=10');
  })
});