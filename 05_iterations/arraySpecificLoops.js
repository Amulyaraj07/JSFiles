// for of 

const arr=[1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

const names="Amulya";

for (const name of names) {
    console.log(name);
}

//map

const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('RS',"Russia");

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj ={
    'game1':'NFS',
    'game2':'spiderman'
}

// for (const element of object) {
    //not iterable like this
// }

for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);
}

//for Each Loop

const coding = ["js","ruby","cpp","java","python"];

coding.forEach(function (item){
    console.log(item);
})

coding.forEach( (item)=>{
    console.log(item);
});

function printMe(item){
    console.log(item+" ");
}

coding.forEach(printMe);

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    console.log(item.languageName);
})