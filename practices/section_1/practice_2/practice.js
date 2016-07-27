function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let collection_c = [];
  let result = [];
  collection_b.find(function (num) {
    collection_c = collection_c.concat(num);
  });
  collection_c = Array.from(collection_c);
  collection_a.find(function (numa) {
    collection_c.find(function (numc) {
      if (numa === numc) {
        result.push(numa);
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
