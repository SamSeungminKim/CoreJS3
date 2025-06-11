// Core JavaScript Practice by Seungmin Kim

var Grade = function() {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
var g = new Grade(100, 80);

console.log(g);
// g.pop();  // TypeError: g.pop is not a function

Grade.prototype = [];
var gg = new Grade(100, 80);
console.log(gg);
gg.pop();
console.log(gg);
gg.push(90);
console.log(gg);

