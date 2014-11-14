var x = "123string1234";
console.log(x.contains("string"));
console.log(x.startsWith("321"));
console.log(x.endsWith("1234"));

console.log("abc ".repeat(5));

var a = "bar";
var b = "foo";
var template = `${a} baz ${b} ${56 * 79}`;
console.log(template);