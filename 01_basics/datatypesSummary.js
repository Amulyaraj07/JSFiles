//Primitive 
//7 types: String,Number,Boolean,null,undefined,symbol,BigInt

/*
JavaScript is dynamically typed. This means that variable types are determined at runtime and you do not need to declare the type of a variable explicitly. A variable can hold any type of data, and its type can change as the program runs.
*/

let x = 5;       // x is a number
x = "hello";     // Now x is a string

//symbol definition

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id === anotherId);//false

const bigNumber=9999999991236977n;


//Reference Type(Non - Primitive)
//Array,Objects, Functions

//Array
const heros=["Shaktiman","nagraj"];

//objects

let myObj={
    name:"amulya",
    roll:12,
}

//function(type: function object)
const myFunc=function(){
    console.log("hello world");
}


/*

Stack(Primitive)  //get copy of variable
Heap(Non-primitive) //get reference of variable


 */

let myYoutubename="Amulya";
let newYoutube=myYoutubename;

newYoutube="ABC";

console.log(myYoutubename);//Amulya
console.log(newYoutube);//ABC because a copy is passed 

let userOne={
    email: "amulya@123",
    upi: "user@ybl",
}

let userTwo=userOne;

userTwo.email="two@gmail.com";

console.log(userOne.email);//two@gmail.com  because reference is passed
console.log(userTwo.email);//two@gmail.com