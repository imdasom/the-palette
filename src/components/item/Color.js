export const Color = {
  equal : function(color1, color2){
    return Color.equalHex(color1.content.hex, color2.content.hex);
  }
  ,equalHex : function (hex1, hex2) {
    return hex1 === hex2;
  }
  ,equalRGB : function(rgb1, rgb2) {
    if (rgb1.r === rgb2.r) {
      return true;
    }
    if (rgb1.g === rgb2.g) {
      return true;
    }
    if (rgb1.b === rgb2.b) {
      return true;
    }
    return false;
  }
};
