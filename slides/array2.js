var x = new Array(5);
x.fill(42);
console.log(x);

var y = ["a", 2, 3, "x", 5];
var findResult = y.find(function(element, index, array){
    return element === "x";
});
console.log(findResult);