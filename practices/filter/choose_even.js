'use strict';

function choose_even(collection) {

  //在这里写入代码
  return collection.filter(function (num) {
    return num % 2 === 0;
  });
}

module.exports = choose_even;
