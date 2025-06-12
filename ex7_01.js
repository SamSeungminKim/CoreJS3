// Core JavaScript Practice by Seungmin Kim

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function() { //프로토타입 메서드
  return this.width * this.height;
};
Rectangle.isRectangle = function(instance) { // 스태틱 메서드
  return (
    instance instanceof Rectangle && instance.width > 0 && instance.height > 0
  );
};

var rect1 = new Rectangle(3, 4);
console.log(rect1);

console.log(rect1.getArea()); // 12 (O)
// console.log(rect1.isRectangle(rect1)); // Error (X)
console.log(Rectangle.isRectangle(rect1)); // true

rect1.getArea = function () {   // 인스턴스 메서드
  console.log("this is an instance method!!");
}
console.log(rect1.getArea()); // 프로토타입 메서드가 아니라 인스턴스 메서드 실행
                              // 다만, Return이 없기때문에 undefined 출력
