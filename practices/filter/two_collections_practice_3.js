'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  let arr = [];
  for(let i=0; i < collection_a.length; i++){
    let flag = false;
    for(let j=0; j < collection_b.length; j++){
      if(collection_a[i] % collection_b[j] === 0)
        flag = true;
    }
    if(flag)
      arr.push(collection_a[i]);
  }
  return arr;
}

module.exports = choose_divisible_integer;
