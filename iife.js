//Basic IIFE

(function () {
  console.log("Hello from IIFE block");
})();

//IIFE with Parameters

(function (name) {
  console.log("Hello ", name, "!");
})("Vishal");

//IIFE to Create a Private Scope

let result = (function () {
  let privateVar = "I am from private";
  return privateVar;
})();
console.log(result);

//IIFE with Return Value

let add = ((a, b) => {
  return a + b;
})(5, 6);

console.log(add);

// IIFE for Module Pattern

let counter = (() => {
  let count = 0;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
  };
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

// IIFE with Arrow Function

(() => {
  console.log("This is an arrow function IIFE!");
})();

//IIFE to Avoid Global Variable Conflicts

let scope = "Global";

(() => {
  let scope = "Blocked";
  console.log(scope);
})();

console.log(scope);

//Arithmetic

let arithmetic = ((num1, num2) => {
  return {
    add: () => {
      return num1 + num2;
    },
    sub: () => {
      return num1 - num2;
    },
    mul: () => {
      return num1 * num2;
    },
    div: () => {
      return num1 / num2;
    },
  };
})(10, 5);

console.log(arithmetic.add());
console.log(arithmetic.sub());
console.log(arithmetic.mul());
console.log(arithmetic.div());

//reverse the array

let rev = (function () {
  let num = [1, 2, 3, 4, 5];
  let temp = [];
  let j = 0;
  for (let i = num.length-1; i >= 0; i--) {
    temp[j] = num[i];
    j++;
  }
  return temp;
})();

console.log(rev);
