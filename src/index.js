module.exports = function check (str, bracketsConfig) {
let obj  = Object.fromEntries(bracketsConfig);
let arr = [];

  for (let i of str.split('')) {
      if (arr[0] === i) {
         arr.shift();
      } else if (obj[i]) {
        arr.unshift(obj[i]);
      } else {
          return false;
      }
  }

  return arr.length === 0;
}