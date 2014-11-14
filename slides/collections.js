var x = new Map();
x.set("key", "value");
x.set(1, 2);
x.set(["x",2], [3,4]);
for(var [key, value] of x){
    console.log(key);
    console.log(value);
}
console.log("Size of x: " + x.size);

var y = new Set([1, 2, 3, 4, 4, 4, 4, 1, 2, 3, 6, 5, 7, 5, 5]);
for(var value of y){
    console.log(value);
}
console.log("Size of y: " + y.size);