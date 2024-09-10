const user={
    username:"amulya",
    price:"100",

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="amu";
// user.welcomeMessage();

// function abc(){
//     let username="amulyaraj";
//     console.log(this.username);
// }

// abc()//undefined

// const pqr=function(){
//     let username="amulyaraj";
//     console.log(this.username);
// }
// pqr();//undefined

const klm=()=>{
    let username="amulyaraj";
    console.log(this.username);
}
klm();//undefined

//arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

//above function can also be written as: (implicit return)
const addTwo=(num1,num2)=> (num1+num2);

console.log(addTwo(3,5));