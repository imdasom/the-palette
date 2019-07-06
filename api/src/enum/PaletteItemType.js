const PaletteItemType = {
  COLOR: 'COLOR'
  ,IMAGE: 'IMAGE'
  ,PATTERN: 'PATTERN'
  ,have: function(type) {
    return this[type] != null;
  }
  ,validContent: function(type, content) {
    if(!this.have(type)) {
      return null;
    }
    if(content == null) {
      return false;
    }
    if(type === this.COLOR) {
      return content['hex'] != null;
    }
    return false;
  }
};
module.exports = PaletteItemType;