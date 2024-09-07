let myDate=new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//custom dates

let myNewDate= new Date(2023,0,23);
console.log(myNewDate.toDateString());

let myNewDate2= new Date("2023-01-14");
console.log(myNewDate2.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);


let newDate3=new Date();
console.log(newDate3.getMonth()+1);// to avoid 0 based indexing
console.log(newDate3.getDay()+1);

newDate3.toLocaleString('default',{
    weekday:"long",
});

