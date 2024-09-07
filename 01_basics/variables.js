const accId=144553;
let accEmail="amulya@gmail.com";
var accPass="Abc@123"; 

let state;//declared but not assigned then it is undefined

/*

prefer not to use var  because of issue in block and functional scope

*/
accCity="Jaipur";

//accId=123; //not allowed because it is declared with const keyword;

console.log(accId);


accEmail="am@gmail.com";
accPass="123@Amu";
accCity="Delhi";

console.log(accEmail); //for single element print

console.table([accEmail,accId,accPass,accCity]); //prints all the values in tabular form

