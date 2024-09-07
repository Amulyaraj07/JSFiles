let score ="33";

console.log(typeof score);//string
console.log(typeof (score));//string

let valueInNumber=Number(score);
console.log(typeof valueInNumber); //number

/*if we try to convert a invalid string which is not a number like "123abc" then it will still show the type number because it is actually converting the string value and getting NaN (Not a Number) having type number

if we give null then it will convert it to 0;
if we give undefined then it will again convert to NaN

for true: 1 and for false: 2


*/

let isLogged=11;

let booleanIsLogged=Boolean(isLogged);
console.log(booleanIsLogged);

/* for 1: true for 0:false for empty string "":false
for any string "Amulya" :true , for any value: true

*/


let num=33;

let stringNum=String(num);
console.log(typeof stringNum); //string




