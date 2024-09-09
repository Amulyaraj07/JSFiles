function sayMyname(){
    console.log("Amulya");
}

sayMyname();
sayMyname();

function add(num1,num2){ //parameters
    console.log(num1+num2);
}

add(4,5);//arguments

const res=add(4,5);
console.log(res); //undefined because the function is printing not returning 

function mul(num1,num2){
    return num1*num2;
}

const result=mul(4,5);
console.log(result);

function loginUserMessage(username){
    return `Welcome ${username}, you logged in!`;
}

console.log(loginUserMessage("Amulya"));
console.log(loginUserMessage());//undefined


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200));

console.log(calculateCartPrice(200,400,500));//use REST operator(...)

const user = {
    username: "amulya",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "raj",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));