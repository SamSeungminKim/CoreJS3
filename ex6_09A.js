// Core JavaScript Practice by Seungmin Kim

var _proto = Object.create(null); // _proto instance의 __proto__를 null로 만들기
_proto.getValue = function(key) {
  return this[key];
}

var obj = Object.create(_proto);
obj.a = 1;
console.log(obj.getValue('a'));
console.log(obj);
