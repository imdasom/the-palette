const CollectionUtils = require('./CollectionUtils');
function getPalettes(parameter) {
  const page = CollectionUtils.get(parameter, 'page');
  const pageSize = CollectionUtils.get(parameter, 'pageSize');
  if(page == null) {
    page = 1;
  }
  if(pageSize == null) {
    pageSize = 16;
  }
  return [...Array(Number(pageSize))].map(item => getPalette());
}
const getPalette = function() {
  return {
    id: new Date().getTime()
    , like: 23
    , author: 'daim'
    , name: 'name' + (Math.floor(Math.random() * (+9999 - +0)) + +0)
    , items: getItems()
  };
}
function getItems() {
  return [
    {
      type: 'COLOR'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
    }
    ,{
      type: 'COLOR'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
    }
    ,{
      type: 'COLOR'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
    }
    ,{
      type: 'COLOR'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
    }
  ];
}
module.exports = {
  getPalettes: getPalettes
};