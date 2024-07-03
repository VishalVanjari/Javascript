//Var

var num1 = 10;
var num1 = 20;
console.log(num1);


//let 

let a = "Vishal";
console.log(a);
a = "Rahul";
console.log(a);

//const

const x = "Constant Variable";
console.log(x);

const pi = 3.142;
console.log(pi);


function area(radius){
    return 3.14*radius*radius;
}

console.log(area(5));

//let is block scope

let z = 10;
console.log(z);
{
    z = 50;
    console.log(z);
}
z=100;
console.log(z);


//Data Types

// 1.Number
// 2.String
// 3.Bigint
// 4.Boolean
// 5.undefined
// 6.Null
// 7.symbol
// 8.objects

//1.Number
let no1 = 16;
let no2 = 7.5;

//2.String
let color = "Red";
let name = "vishal";

//3.Boolean
let c = true;
let d = false;

//4.Object
let person = {
    name :"vishal",
    lastName : "Vanjari"
};

console.log(person);



// undefined
let car;
console.log(typeof(car));

console.log(typeof (33 + "66") );
console.log(typeof(null));

//Array

let arr = ["Apple","Banana","Pineapple"]
console.log(arr);   
console.log(arr.toString());
console.log(arr[0]);
console.log(arr.length);
arr.push("Mango");
console.log(arr);


//Set

let numbers = new Set([4,5,8,3,2,69]);
console.log(numbers);

let letters = new Set();
letters.add("a");
letters.add("c");
letters.add("b");
letters.add("c");

console.log(letters);
console.log(letters.has("c"));

for(let letter of letters){
    console.log(letter);
}

//Map

const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits);