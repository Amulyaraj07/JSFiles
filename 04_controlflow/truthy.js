const userEmail="amulya@gmail.com";

if(userEmail){
    console.log("have email");
}else{
    console.log("don't have");
}


//falsy values

//false,0-0,BigInt,"",null,undefined,NaN

//truthy
//rest all are truthy values
// "0" , "false" , " ", [],{}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")