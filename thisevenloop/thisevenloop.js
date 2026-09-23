console.log("A");

setTimeout(()=>{
    console.log("B");
},0)

console.log("c");


//callstack
function first(){
    console.log("first");
    second();
}
function second(){
    console.log("second");
    third();
}
function third(){
    console.log("third");
}
first();