//GLobal scope


// let count=1;
// let timer = setInterval(()=>{
//   console.log(count);
//   count++;
//   if(count==6){
//   clearInterval(timer);
//   }
// }
// ,5000);


//Function Scope

// function s(){
//     let x=
// }

//block scope

// if(true){
//     let x=10;
//     let y=20;
//  console.log(x);
//   console.log(y);
// }

//Hoisting
// console.log(name);
// var name="yash";

// console.log(20);
//tdz start
// let age=20;  //TDZ  the period btw entering a scope and initialize a let and const is called temp dead zone
//tdz end        

//closure 

// jo bhi hamra outer function hai innenr function outer function ke saare variable ko yaad rakhegaa agr vo false
// finish bhi ho gya to bhi saare yad rakhega

function outer(){
    let counter=0;

    function Inner(){
counter++;


console.log(counter);
    }
    return inner();
    let+=outer;
}
let i=(outer);















