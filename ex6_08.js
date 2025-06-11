// Core JavaScript Practice by Seungmin Kim

var arr = [1, 2];
Array.prototype.toString.call(arr); // 1,2
console.log(Array.prototype.toString.call(arr));

Object.prototype.toString.call(arr); // [object Array]
console.log(Object.prototype.toString.call(arr));

arr.toString(); // 1,2
console.log(arr.toString());

console.log(arr.__proto__.__proto__.toString()); //[object Object]
console.log(arr.__proto__.__proto__.toString.call(arr)); //[object Array]


// 메서드 오버라이딩딩
arr.toString = function() {
  return this.join('_');
};
arr.toString(); // 1_2
console.log(arr.toString());



