console.log(2 > 1);   // Greater than (true)
console.log(1 < 2);   // Less than (true)
console.log(2 >= 2);  // Greater than or equal to (true)
console.log(1 <= 2);  // Less than or equal to (true)
console.log(2 == 2);  // Equal to (true)
console.log(2 != 1);  // Not equal to (true)


console.log("2">1);//true
console.log("02">1);//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//false

/*in JS ==(equality check) and other cpmarison operators works differently , comparison operators converts null to 0 then compares */

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

//strict check: checks value + datatypes also

console.log(2 === 2); // Strict equality (true)
console.log(2 !== 1); // Strict inequality (true)

console.log("2" === 2); // Strict equality (false)

