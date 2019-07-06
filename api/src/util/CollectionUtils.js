/**
 * 복합 객체 널체크
 * @param obj
 * @param key
 * @returns {string}
 */
module.exports = {
  get: function(obj, key) {
    return key.split(".").reduce(function (o, x) {
      return (typeof o == "undefined" || o === null) ? o : o[x];
    }, obj);
  }
};
