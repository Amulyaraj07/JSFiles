const score=400;

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++Maths++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(1,2,3,4));

console.log(Math.max(1,2,3,4));

console.log(Math.random());//it will generate value between 0-1
console.log((Math.random()*10) +1);//it will generate the value between 1-10 but in decimal form //added +1 just to handle the 0.01 wala case when multiplied gives 0 so adding one will make it 1;

console.log(Math.floor(Math.random()*10)+1);//floor just to round off

//if we have a certain range then

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);


