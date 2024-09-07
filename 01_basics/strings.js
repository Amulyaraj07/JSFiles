const name="Amulya";
const repoCount=22;

console.log(name+repoCount+" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const nameS=new String("Amulya");
console.log(nameS.__proto__);

console.log(nameS.length);
console.log(nameS.toUpperCase);
console.log(nameS.charAt(2));
console.log(nameS.indexOf('t'));

const newString=nameS.substring(0,4);
console.log(newString);

const anotherString=nameS.slice(-8,4);
console.log(anotherString);

const newStringOne="    Amulya    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://google.com/home%20thissection"

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(nameS.split('-'));