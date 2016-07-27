function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let collection_c = [];
  collection_a.find(function (numa) {
    collection_b.find(function (numb) {
      if (numa === numb) {
        collection_c.push(numa);
      }
    });
  });
  return collection_c;
}

module.exports = collect_same_elements;
