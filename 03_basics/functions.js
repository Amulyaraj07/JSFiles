function sayMyname(){
    console.log("Amulya");
}

sayMyname();
sayMyname();

function add(num1,num2){ //parameters
    console.log(num1+num2);
}

add(4,5);//arguments

const res=add(4,5);
console.log(res); //undefined because the function is printing not returning 

function mul(num1,num2){
    return num1*num2;
}

const result=mul(4,5);
console.log(result);
