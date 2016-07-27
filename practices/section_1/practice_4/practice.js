function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = [];
  collection_a.find(function (numa) {
    object_b.value.find(function (numb) {
      if (numa.key === numb) {
        result.push(numa.key);
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
