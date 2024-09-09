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




console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

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

//////////////////////////////////////////////
//singleton Objects
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "amu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "amu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Amulya",
            lastname: "raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //object ke andr object
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "0",
    courseInstructor: "amulya"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "amulya",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]