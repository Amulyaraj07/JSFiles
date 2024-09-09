//Objects:
//singleton: constructor se banega to singleton
Object.create();

//if we want to use a symbol in objects the we should use []
const mySym = Symbol("key1")
//object literals
 
const JsUser={
    name:"Amulya",
    age:18,
    email:"amulya@gmail.com",
    isActive:false,
    lastActiveDays:["Mon","Tue"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);




// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "amulya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "amulya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
