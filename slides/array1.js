var x = ["a", "b", "c"];
var y = Array.from("abc");
console.log(x);
console.log(y);

for(var item of x){
    console.log(item);
}

var z = Array.of("a", "b", "c");
console.log(z);