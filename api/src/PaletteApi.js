const ErrorType = require('./ErrorType');
const PaletteItemType = require('./enum/PaletteItemType');
const CollectionUtils = require('./util/CollectionUtils.js');

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 16;

let PaletteDatabase = [];
let id = 0;

function create(newPalette) {
  validatePalette(newPalette);
  id++;
  newPalette.id = id;
  newPalette.like = 0;
  newPalette.created = new Date().getTime();
  PaletteDatabase.push(newPalette);
  return id;
}

function getPalette(id) {
  const palettes = PaletteDatabase.filter(palette => palette.id === id);
  if (palettes.length > 1) {
    throw new Error('palettes id cannot duplicate.');
  }
  return palettes[0];
}

function getPalettes(page, pageSize) {
  const startIndex = ((page - 1) * pageSize);
  const startNo = startIndex;
  const endNo = startIndex + pageSize;
  return PaletteDatabase.slice(startNo, endNo);
}

function getPalettesWithPagination(parameter) {
  let page = CollectionUtils.get(parameter, 'page');
  let pageSize = CollectionUtils.get(parameter, 'pageSize');
  if(page == null) {
    page = DEFAULT_PAGE;
  }
  if(pageSize == null) {
    pageSize = DEFAULT_PAGE_SIZE;
  }
  return getPalettes(page, pageSize);
}

function validatePalette(palette) {
  if (palette.items.length < 1) {
    throw new Error(ErrorType.INVALID_PARAMETER);
  }
  palette.items.forEach(item => {
    if(!PaletteItemType.have(item.type)) {
      throw new Error(ErrorType.INVALID_PARAMETER);
    } else {
      if(!PaletteItemType.validContent(item.type, item.content)) {
        throw new Error(ErrorType.INVALID_PARAMETER);
      }
    }
  });
}

module.exports = {
  create: create
  ,getPalette: getPalette
  ,getPalettesWithPagination: getPalettesWithPagination
};