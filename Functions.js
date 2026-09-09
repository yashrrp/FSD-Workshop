// function add(a,b) {
//     return a+b;
// }

// console.log(add(5,3));

//arror function

// const add=(a,b)=>{
//   return a+b;
// }
// console.log(add(5,3));

// default parameter

// function add(a,b){
//   return a+b;
// }
// console.log(add(5,3));

//callback function
// function display(result){
//   console.log(result);
// }

// function cal(a,b,callback){
//   callback(a+b);
// }
// cal(10,20,display);

//set time out  particular time ke baad output dissplay ho

// console.log("start");

// setTimeout(()=>{
//     console.log("execute now");
// },5000);
// console.log("stop");

//set interval

let count=1;
let timer = setInterval(()=>{
  console.log(count);
  count++;
  if(count==6){
  clearInterval(timer);
  }
}
,5000);









