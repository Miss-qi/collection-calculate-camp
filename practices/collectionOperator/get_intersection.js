'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let collection_c = [];
  collection_b.find(function (numb) {
    collection_a.find(function (numa) {
      if (numa === numb){
        collection_c.push(numa);
      }
    });
  });
  return collection_c;
}

module.exports = get_intersection;
