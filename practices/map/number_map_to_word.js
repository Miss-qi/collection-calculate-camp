'use strict';
var number_map_to_word = function (collection) {
  return collection.map(function (num) {
    return String.fromCharCode(64 + 32 + num);
  });
};

module.exports = number_map_to_word;
