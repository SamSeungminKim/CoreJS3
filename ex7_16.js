// Core JavaScript Practice by Seungmin Kim

var Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
};
var Square = class extends Rectangle {
  constructor(width) {
    super(width, width);
  }
  getArea() {
    console.log('size is :', super.getArea());
  }
};

var sq = new Square(10);
sq.getArea(); // size is : 100
//console.log(sq.super.getArea());  // Error. super는 클래스안에서만...
//console.log(sq.__proto__.getArea());  // size is : NaN
console.dir(sq); //Square { width: 10, height: 10 }
console.dir(sq.__proto__);  //Rectangle {}