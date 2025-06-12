// Core JavaScript Practice by Seungmin Kim

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea()); // 12

var Square = function(width) {
  Rectangle.call(this, width, width);
};
Square.prototype = new Rectangle();  //Square.Prototype이 Rectangle instance를 가르키도록 함.
// 즉, 이후 만들어지는 Square의 instance의 __proto__는 비어있는 Rectangle instance를 가르키고
// 빈 Rectangle instance의  __proto__가 최종 Rectangle.Prototype을 가르키도록 함.

var sq = new Square(5);
console.log(sq.getArea()); // 25