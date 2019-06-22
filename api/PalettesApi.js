const CollectionUtils = require('./CollectionUtils');
function getPalettes(parameter) {
  const page = CollectionUtils.get(parameter, 'page');
  const pageSize = CollectionUtils.get(parameter, 'pageSize');
  return [...Array(Number(pageSize))].map(item => getItem());
}
function getItem() {
  return {
    type: 'COLOR'
    , like: 23
    , author: 'daim'
    , name: 'name' + (Math.floor(Math.random() * (+9999 - +0)) + +0)
    , content: {
      r: Math.floor(Math.random() * (+255 - +0)) + +0
      , g: Math.floor(Math.random() * (+255 - +0)) + +0
      , b: Math.floor(Math.random() * (+255 - +0)) + +0
      , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
    }
  }
}
module.exports = {
  getPalettes: getPalettes
};