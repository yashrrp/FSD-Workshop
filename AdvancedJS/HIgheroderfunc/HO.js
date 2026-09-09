// function calculate(a,b,op){
   

//     return (a,b);
// }
// function add(x,y){
//     return x+y;
// }

// function multiply(x,y){
//     return x*y;

// }
// console.log()

//.map

// let number=[1,2,3,4,5];

//  let sqaures=numbers.map(function(number)

//  {
//     return number*number;
//  });

//  let number=[1,2,3,4,5];
//  let s=numbers.map(number=>number*number);
//  console.log(s);

//.filter
// let number=[1,2,3,4,5];
// let even =number.filter(number=>{
//     return number%2==0;

// });

// console.log(even);

//reduce 
// let numbers=[1,2,3,4,5];
// let total=numbers.reduce((max,number)=>{
// return max<number ?number:max;
// },numbers[0]);
// console.log(total);

let students=[
    {id:1,name:"yash",marks:30},
      {id:2,name:"yuvraj",marks:50},
       {id:3,name:"vedansh",marks:60},
        {id:4,name:"vrinda",marks:80},
         {id:5,name:"vikas",marks:90},
];

let student=students.find(s=>s,id==2);
console.log(student);



