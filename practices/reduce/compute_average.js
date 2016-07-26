'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce(function (cur, newVal) {
      return cur + newVal;
    }, 0) / collection.length;
}

module.exports = compute_average;

