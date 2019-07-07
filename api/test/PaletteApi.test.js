const should = require('should');
const PaletteApi = require('../src/PaletteApi');
const ErrorType = require('../src/ErrorType');

describe('Test PaletteApi', function() {
  it('should PaletteApi instance not null', function () {
    should.exist(PaletteApi);
  });
  it('should be called create() function', function () {
    const palette = {
      items: [
        {type: 'COLOR', content: {hex: 'AAAAAA'}}
        ,{type: 'COLOR', content: {hex: 'BBBBBB'}}
        ,{type: 'COLOR', content: {hex: 'CCCCCC'}}
        ,{type: 'COLOR', content: {hex: 'DDDDDD'}}
      ]
    };
    const id = PaletteApi.create(palette);
    id.should.not.null();
  });
  it('should throw error when item length in the palette is 0', function () {
    const palette = {
      items: []
    };
    should(function() { PaletteApi.create(palette); }).throw(new Error(ErrorType.INVALID_PARAMETER));
  });
  it('should throw error when item have unknown type', function () {
    const palette = {
      items: [
        {type: 'UNKNOWN_TYPE',content: {hex: 'AAAAAA'}}
      ]
    };
    should(function() { PaletteApi.create(palette); }).throw(new Error(ErrorType.INVALID_PARAMETER));
  });
  it('should throw error when COLOR item have not hex content', function () {
    const palette = {
      items: [
        {type: 'COLOR',content: {this_is_not_hex: 'AAAAAA'}}
      ]
    };
    should(function() { PaletteApi.create(palette); }).throw(new Error(ErrorType.INVALID_PARAMETER));
  });
  it('should have same data when create new palette', function () {
    const newPalette = {
      items: [
        {type: 'COLOR', content: {hex: 'AAAAAA'}}
        ,{type: 'COLOR', content: {hex: 'BBBBBB'}}
        ,{type: 'COLOR', content: {hex: 'CCCCCC'}}
        ,{type: 'COLOR', content: {hex: 'DDDDDD'}}
      ]
    };
    const id = PaletteApi.create(newPalette);
    const palette = PaletteApi.getPalette(id);
    should.strictEqual(newPalette, palette);
  });
  it('should return 3 items when get paginated palette with {pageSize=3, page=1}', function () {
    const palette = {
      items: [
        {type: 'COLOR',content: {hex: 'AAAAAA'}}
      ]
    };
    [...Array(10)].forEach(() => PaletteApi.create(palette));
    PaletteApi.getPalettesWithPagination(1, 3).length.should.within(0, 16);
  });
});
