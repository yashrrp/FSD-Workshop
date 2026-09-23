
const Student1={
 name:"Yash",
}
const Student2={
    name:"Yuvraj",
};

function  introduce(city){
    console.log('my name is $(name) and i live in $(city)')
}
introduce.call(Student1,"delhi");