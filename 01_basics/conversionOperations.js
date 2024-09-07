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


//************Operations****************//

let value=3;
let negVal=-value;
console.log(negVal); //-3

console.log(2 + 2); // Addition
console.log(4 - 2); // Subtraction
console.log(2 * 2); // Multiplication
console.log(4 / 2); // Division
console.log(5 % 2); // Modulus (remainder)
console.log(2 ** 3); // Exponentiation (2 raised to the power of 3)

//operation on string

let str1="amulya";
let str2="raj";
let str3=str1+str2;
console.log(str3);

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2); //122
console.log(1+2+"2")//32

console.log(+true)//1
console.log(+"");//0


 let num1,num2,num3;

//  num1=num2=num3=2+2; //not readable

let count=100;
count++;//post increment
console.log(count); //101
++count;//pre increment
console.log(count);//102






