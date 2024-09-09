// let a=10; 
// const b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    let a=10; //block scope
    const b=20; //block scope
    var c=30;//global scope
}
console.log(a);//error
console.log(b);//error
console.log(c);//print without error
