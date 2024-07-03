// Block scope

let x = 10;
{
    let x = 5;   // Block scope
    console.log(x);
}
console.log(x);

// Local or functional Scope

let sum = () =>{
    let a =5, b=10; // functional scope
    return a+b;

}

//console.log(a); // can not use outside of function

console.log(sum());


// Global Scope

let name = "Vishal";

let hello = (name) =>  "Hello "+ name

console.log(hello(name));