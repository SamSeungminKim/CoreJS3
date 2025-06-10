// Core JavaScript Practice by Seungmin Kim

var Person = function(name) {
  this._name = name;
};
Person.prototype.getName = function() {
  return this._name;
};

var suzi =  new Person('Suzi');

//suzi.__proto__ 객체 내부에는 _name 프로퍼티 없음.
console.log(suzi.__proto__.getName()); // undefined 반환

//suzi 객체 내부에는 _name 프로퍼티 있음. but getName() 함수 없으나... 
// __proto__ 생략된 것으로 보아 getName() Method 호출 가능
console.log(suzi.getName());  //Suzi

// suzi.__proto__ 객체 내부에는 _name 프로퍼티 추가.
suzi.__proto__._name = 'SUZI__proto__';
console.log(suzi.__proto__.getName()); // SUZI__proto__ 반환

console.log(suzi.getName());  //Suzi

var iu = new Person('Jieun', 28);
console.log(iu.getName());  //Jieun

// iu.__proto__ 객체는 suzi.__proto__와 동일 객체인 Person.protype을 같이 바라 봄.
console.log(iu.__proto__.getName());  // SUZI__proto__ 반환
