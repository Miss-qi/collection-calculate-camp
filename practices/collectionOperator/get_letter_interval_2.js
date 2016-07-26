'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  let temp;
  if(number_a < number_b){
    for (let i =number_a; i<=number_b;i++){
      if (i <= 26){
        result.push(String.fromCharCode(64 + 32 +i));
      }
      else {
        let ge = i % 26;
        let shi = i / 26;
        if (ge === 0){
          temp = String.fromCharCode(64 + 32 + shi -1)
            .concat(String.fromCharCode(64 + 32 +26));
        }
        else {
          temp = String.fromCharCode(64 + 32 + shi)
            .concat(String.fromCharCode(64 + 32 + ge));
        }
        result.push(temp);
      }
    }
  }
  else if(number_a > number_b){
    for (let i =number_a; i>=number_b;i--){
      if (i <= 26){
        result.push(String.fromCharCode(64 + 32 +i));
      }
      else {
        let ge = i % 26;
        let shi = i / 26;
        if (ge === 0){
          temp = String.fromCharCode(64 + 32 + shi -1)
            .concat(String.fromCharCode(64 + 32 +26));
        }
        else {
          temp = String.fromCharCode(64 + 32 + shi)
            .concat(String.fromCharCode(64 + 32 + ge));
        }
        result.push(temp);
      }
    }
  }
  else {
    if (number_a <= 26){
      result.push(String.fromCharCode(64 + 32 +number_a));
    }
    else {
      let ge = number_a % 26;
      let shi = number_a / 26;
      if (ge === 0){
        temp = String.fromCharCode(64 + 32 + shi -1)
          .concat(String.fromCharCode(64 + 32 +26));
      }
      else {
        temp = String.fromCharCode(64 + 32 + shi)
          .concat(String.fromCharCode(64 + 32 + ge));
      }
      result.push(temp);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

