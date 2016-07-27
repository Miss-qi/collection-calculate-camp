function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let arr = [];
  collection_a.find(function (numa) {
    object_b.value.find(function (numb) {
      if (numa === numb) {
        arr.push(numa);
      }
    });
  });
  return arr;
}

module.exports = collect_same_elements;
