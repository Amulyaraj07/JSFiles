//Immediately Invoked Function Expressions(IIFE)

(function func(){
    console.log("DB connected");
})();

//it will imediately invoke the function 
// global scope ke polution se problem hoti hai kai baar , to global scope ke variables ya aur kuch ko hatane ke liye iife use kiya
//isme hame semicolon lagana padega taki ptta chal skke ki end kha krna hai otherwise it will give Error


(()=>{
    console.log("Amulya Raj");
})();

((name)=>{
    console.log(`Amulya Raj, your name is ${name} `);
})("amulya");
