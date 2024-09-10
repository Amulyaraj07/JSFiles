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

function one(){
    const username="amulya";
    function two(){
        const website="youtube";
        console.log(username);
    }
    console.log(website);//error
    two();
}

one();
two(); //error

if(true){
    const username="amulya";
    if(username==="amulya"){
        const website="youtube"
        console.log(username+website);
    }
    console.log(website);//error
}

console.log(username);//error

///////////////////////////////////////////////////
addOne(6);//also works fine before declaration 
function addOne(num){
    return num+1;
}

addOne(6);//works fine


addTwo(5);//error because we have stored it in some variable ,here comes the concept of hoisting
const addTwo=function(num){
    return num+2;
}

addTwo(5);//works fine


