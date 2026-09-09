
// try{
// let a=10;
// console.log(a);
// console.log(b);
// } 
// catch(error){
//     console.log(error.message);
// }

//custom error

function checkAge(age){
    if(age<18){
        throw new Error("Not");
    }
    console.log("yes");
}
try{
    checkAge(15);
}
catch(error){
    console.log(error.message);
}
