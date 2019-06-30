const CollectionUtils = require('./CollectionUtils');

let sequence = 1;
let palettes = [];

function create(parameter) {
  const id = sequence++;
  parameter.id = id;
  palettes.push(parameter);
  return id;
}
function getPalettes(parameter) {
  let page = CollectionUtils.get(parameter, 'page');
  let pageSize = CollectionUtils.get(parameter, 'pageSize');
  if(page == null) {
    page = 1;
  }
  if(pageSize == null) {
    pageSize = 16;
  }
  return getPaginatedPalettes(page, pageSize);
}
const getPaginatedPalettes = function(page, pageSize) {
  const startIndex = ((page - 1) * pageSize);
  const startNo = startIndex;
  const endNo = startIndex + pageSize;
  return palettes.slice(startNo, endNo);
};
module.exports = {
  getPalettes: getPalettes
  ,create: create
};