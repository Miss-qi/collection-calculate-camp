'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  let arr = [];
  for(let i=0; i < collection_a.length; i++){
    let flag = true;
    for(let j=0; j < collection_b.length; j++){
      if(collection_a[i] === collection_b[j])
        flag = false;
    }
    if(flag)
      arr.push(collection_a[i]);
  }
  return arr;
}

module.exports = choose_no_common_elements;
