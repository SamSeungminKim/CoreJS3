// Core JavaScript Practice by Seungmin Kim

var Constructor = function(name) {
  this.name = name;
};
Constructor.prototype.method1 = function() {};
Constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);


var arr = [1,2];
console.dir(arr);
console.dir(Array);

arr.forEach(function(){});
console.log(Array.isArray(arr));  // true
arr.isArray();  // TypeError: arr.isArray is not a function