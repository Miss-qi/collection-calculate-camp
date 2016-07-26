'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let arr = collection.reduce(function (cur,newVal) {
    return (cur[newVal]++ || (cur[newVal] = 1),cur);
  },{});
  return arr;
}

module.exports = grouping_count;
