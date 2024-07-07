//Array Methods as Higher-Order Functions

const numbers = [10, 25, 63, 13, 50, 65, 70, 89];

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log("Double numbers : ", doubled);

const evenNum = numbers.filter((num) => {
  return num % 2 == 0;
});

console.log("Even Numbers : ", evenNum);

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log("Sum is : ", sum);

// Higher-Order Functions
let radius = [12, 36, 45, 86, 35];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = function (redius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log("Area is : ", calculate(radius, area));
console.log("circumference is : ", calculate(radius, circumference));
console.log("diameter is : ", calculate(radius, diameter));

//functio that return a function

function createMiulti(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const doublee = createMiulti(2);
const triple = createMiulti(3);

console.log(doublee(5));
console.log(triple(5));

//Function as argument

function repeat(action, times) {
  for (let i = 0; i < times; i++) {
    action();
  }
}
function sayHello() {
  console.log("Hello");
}
repeat(sayHello, 3);

//with setTimeout function

function greet(name) {
  console.log(`Hey, ${name}!`);
}

setTimeout(greet, 1000, "Vishal");

//with setInterval

function showTime() {
  console.log(new Date().toLocaleTimeString());
}

const intervalId = setInterval(showTime, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

//Function Composition

function compose(double, add) {
  return function (x) {
    return double(add(x));
  };
}

function add(x) {
  return x + 5;
}

function double(x) {
  return x * 2;
}

const add5AndDouble = compose(double, add);
console.log(add5AndDouble(10));

// calculate the Intrest

function calculateIntrest(p, r, t) {
  return (p * r * t) / 100;
}

function totalInterest(calculateIntrest) {
  let p = 10000,
    r = 3,
    t = 5;
  return calculateIntrest(p, r, t);
}

let totalamount = totalInterest(calculateIntrest);
console.log("Interest Earned : ", totalamount);

//Custom foreach
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

forEach(nums, (number, index) => {
  console.log(`Index : ${index}, Value: ${number}`);
});
