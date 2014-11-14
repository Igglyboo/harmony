var fibonacci = function*(limit){
    var previous = 0;
    var current = 1;
    while(current + previous < limit){
        var temp = previous;
        previous = current;
        current = temp + current;
        yield current;
    }
};
for(var value of fibonacci(80)){
    console.log(value);
}