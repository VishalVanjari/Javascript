// Call() Method

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const p1 = {
  firstName: "Vishal",
  lastName: "Vanjari",
};

const p2 = {
  firstName: "Nikhil",
  lastName: "Patil",
};

console.log(person.fullName.call(p1));
console.log(person.fullName.call(p2));

//call() Method with Arguments

const man = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " ," + city + " ," + country;
  },
};

const per1 = {
  firstName: "Yash",
  lastName: "Wani",
};

console.log(man.fullName.call(per1, "Shirpur", "India"));

// another ex

const obj1 = {
  number: 5,
  increment: function (a, b) {
    return this.number + a + b;
  },
};

const obj2 = {
  number: 10,
};

console.log(obj1.increment.call(obj2, 1, 2));

// call chain constructors

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price, category) {
  Product.call(this, name, price);
  this.category = category;
}

const pizza = new Food("Pizza", 199, "Fast Food");
console.log(pizza.name);
console.log(pizza.price);
console.log(pizza.category);

//Invoke an Anonymous Function

console.log(
  function () {
    console.log(this.firstName + "  ", this.lastName);
  }.call(p1)
);

//with array objects

function add(a, b) {
  return a + b;
}

const args = [2, 3];

console.log(add.call(null, ...args)); // instead of passing any obj we pass a null vlaue

//Apply() Method

const person2 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const p3 = {
  firstName: "Vishal",
  lastName: "Vanjari",
};

const p4 = {
  firstName: "Nikhil",
  lastName: "Patil",
};

console.log(person2.fullName.apply(p3));
console.log(person2.fullName.apply(p4));

const obj3 = {
  number: 5,
  increment: function (a, b) {
    return this.number + a + b;
  },
};

const obj4 = {
  number: 10,
};

console.log(obj1.increment.apply(obj2, [1, 2]));

function Product1(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price, category) {
  Product1.apply(this, [name, price]);
  this.category = category;
}

const burger = new Food("Burger", 99, "Fast Food");
console.log(burger.name);
console.log(burger.price);
console.log(burger.category);

// apply with anonymous function

const person3 = {
  firstName: "Yamini",
  lastName: "Deshmukh",
};

console.log(
  function () {
    console.log(this.firstName + " " + this.lastName);
  }.apply(person3)
);

//apply with array like objects

function add(a, b) {
  return a + b;
}

const arg = [50, 56];

console.log(add.apply(null, arg));

//call() Method with Arguments

const women = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " ," + city + " ," + country;
  },
};

const per6 = {
  firstName: "Sakshi",
  lastName: "Kukreja",
};

console.log(man.fullName.apply(per6, ["Dondaicha", "India"]));

//to find max

console.log(Math.max.apply(null, [1, 2, 3]));

console.log(Math.max.apply(Math, [1, 2, 3]));

console.log(Math.max.apply(" ", [1, 2, 3]));

console.log(Math.max.apply(0, [1, 2, 3]));

//Bind() Methhod

const person7 = {
  firstName: "Pruthviraj",
  lastName: "Sharma",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Khushi",
  lastName: "Agrawal",
};

let fullNames = person7.fullName.bind(member);
console.log(fullNames());

// When a function is used as a callback, this is lost.

const getName = {
  firstName: "Chetan",
  lastName: "Rathod",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let display = getName.display.bind(getName);

setTimeout(display, 3000);

//Basic Bind

const person8 = {
  name: "Akshay",
  greet: function (greeting) {
    console.log(greeting + ", " + this.name);
  },
};

const anotherPerson = { name: "Chetan" };

const greetChetan = person8.greet.bind(anotherPerson, "Hello");
greetChetan();


// Preserving this in a Callback


const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(this.count);
  },
};

const boundIncrement = counter.increment.bind(counter);

setTimeout(boundIncrement, 1000);

//

function multiply(a,b){
    return a*b;
}
const double = multiply.bind(null,2);
console.log(double(3));
console.log(double(10));

//
function greeted(greeting,name){
    console.log(greeting+ "," +name);
}

const greetHello = greeted.bind(null,"Hello");
greetHello("Ishita");
greetHello("Nikita");


//Combining bind with call or apply

function logDetails(country,city){
    console.log(this.name + " lives in " + city + "," + country);
}

const person4 = {
    name : "Vishakha"
}

const logVishakhaDetails = logDetails.bind(person4);

logVishakhaDetails("India","Mumbai");

logVishakhaDetails.call(null,"Canada","Toronto");
logVishakhaDetails.apply(null,["UK","London"])