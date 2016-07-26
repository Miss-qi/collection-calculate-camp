'use strict';

function choose_common_elements(collection_a, collection_b) {
  let collection_c = [];
  collection_a.find(function (numa) {
    collection_b.find(function (numb) {
      if (numa === numb){
        collection_c.push(numa);
      }
    });
  });
  return collection_c;
}

module.exports = choose_common_elements;
