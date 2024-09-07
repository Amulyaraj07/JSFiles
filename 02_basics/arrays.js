//array

const arr=[1,2,3,,4,5];
console.log(arr[0]);


//shallow copy: shares the same reference
//deep copy: Donot share the same reference

const myArr=new Array(1,2,3,4,5);
console.log(myArr[0]);

//Array Methods

myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(0);//insert at first

myArr.shift();

console.log(myArr.includes(9));

console.log(myArr.indexOf(9));

console.log(myArr);
console.log(typeof myArr);
const newArr=myArr.join();//converts arr to string comma separated value
console.log(newArr);
console.log(typeof newArr);


//slice , splice

console.log("A",myArr);
const myn1=myArr.slice(1,3); //do not manipulate te original array and also the second limit is exclusive

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3); //manipulates the original array and also second limit is inclusive

console.log("C",myArr);
console.log(myn2);

//Arrays Part-2:
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));