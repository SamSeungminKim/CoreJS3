// Core JavaScript Practice by Seungmin Kim

var Person = function(name) {
  this.name = name;
};
Person.prototype.getName = function() {
  return this.name;
};

var iu = new Person('지금');
console.log(iu.getName()); // 지금

iu.getName = function() {  // 메서드 오버라이드드
  return '바로 ' + this.name;
};
console.log(iu.getName()); // 바로 지금

console.log(iu.__proto__.getName());  //undefined (prototype상에 name 프로퍼티 없음)

Person.prototype.name = '이지금';
console.log(iu.__proto__.getName());  // 이지금
console.log(iu.getName()); // 바로 지금

var iu2 = new Person('지금아냐');
console.log(iu2.getName()); // 지금아냐 ? 이지금 ? > 지금야냐
console.log(iu2.__proto__.getName()); // 지금아냐 ? 이지금 ? > 이지금