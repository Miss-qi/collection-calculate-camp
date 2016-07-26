'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = [];
  collection.find(function (num) {
    result = result.concat(num);
  });
  return Array.from(new Set(result));
}

module.exports = double_to_one;
