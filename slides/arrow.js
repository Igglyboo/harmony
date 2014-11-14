var a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
var b = a.map(function(s){ return s.length });
var c = a.map( s => s.length );
console.log(b);
console.log(c);

var f = new Foo();
function Foo(){
    this.color = "red";

    setTimeout(function(){
        if(typeof this.color !== "undefined") {
            $("body").attr("style", "background-color: " + this.color);
        }
    }, 300);

    setTimeout(x => $("#arrow_textarea").attr("style", "background-color: " + this.color), 300);
}