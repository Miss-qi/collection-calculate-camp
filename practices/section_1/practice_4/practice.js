function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = [];
  collection_a.find(function (numa) {
    for (let i in object_b) {
      object_b[i].find(function (numb) {
        if (numa.key === numb) {
          result.push(numb);
        }
      });
    }
  });
  return result;
}

module.exports = collect_same_elements;
