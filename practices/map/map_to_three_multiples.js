'use strict';
var map_to_three_multiples = function (collections) {
  return collections.map(function (num) {
    return num * 3;
  });
};

module.exports = map_to_three_multiples;
