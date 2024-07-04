//Using an array literal

const fruits = ["Apple", "Pineapple", "Banana", "Mango"];
console.log(fruits);
console.log(fruits[1]);

console.log(typeof fruits);

console.log(Array.isArray(fruits));

//Number Array

let numberArr = [5, 6, 8, 23, 54, 96, 1];
console.log(numberArr);

//Mixed Array

let mixArr = ["Vishal", 21, "Mumbai", true];
console.log(mixArr);

const cars = [];
cars[0] = "TATA";
cars[1] = "BMW";
cars[2] = "Toyato";
console.log(cars);

//Using New Keyword

const languages = new Array("C", "Java", "Python", "Nodejs");

let lang = languages[1];
console.log(lang);

// Array are Object

let person = {
  firstname: "Vishal",
  age: 21,
  city: "Mumbai",
};

console.log(person.age);

//Array of Objects

let student = [
  {
    name: "Nikhil",
    age: 22,
    city: "Shirpur",
  },
  {
    name: "Vishal",
    age: 21,
    city: "Mumbai",
  },
];

console.log(student[0].name);
console.log(student[1].age);

//access first element

const codeingLang = ["C++", "Java", "Python", "Nodejs"];
console.log(codeingLang[0]);

//access last element

console.log(codeingLang[codeingLang.length - 1]);

// Looping Array Elements

for (let i = 0; i < codeingLang.length; i++) {
  console.log(codeingLang[i]);
}

// Add element

codeingLang.push("PHP");
console.log(codeingLang);

//Array Methods

let arr1 = ["Yash", "Chetan", "Pruthviraj", "Nikhil", "Jay"];
let arr2 = [25, 32, 1, 98, 20, 17, 27];

//1. length

console.log(arr1.length);

//2.tostring

console.log(arr1.toString());

//3. push

arr1.push("Shivam");
console.log(arr1);

//4.pop

arr1.pop();
console.log(arr1);

//5.unshift -- add elemnt to start
arr1.unshift("Rahul");
console.log(arr1);

//6. shift
arr1.shift();
console.log(arr1);

//7. indexof

console.log(arr1.indexOf("Nikhil"));

//8. at

console.log(arr1.at(2));

//9. encludes

console.log(arr1.includes("Yash"));

//10. Concat

console.log(arr1.concat(arr2));

//11.revese

console.log(arr1.reverse());

//12. slice

console.log(arr1.slice(0, 2));

//13. splice

arr1.splice(2, 0, "Akshay");
console.log(arr1);

//14. join

console.log(arr1.join(" * "));

//15. sort

console.log(arr1.sort());
console.log(arr2.sort());

//16. concat

console.log(arr1.concat(arr2));
