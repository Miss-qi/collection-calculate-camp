'use strict';

function choose_no_repeat_number(collection) {
    return collection.filter(function(elem, pos, self) {
// 如果没有重复项，返回true
      return self.indexOf(elem, pos + 1) === -1;
    });
}

module.exports = choose_no_repeat_number;
