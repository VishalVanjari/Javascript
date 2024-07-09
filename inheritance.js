//Class Syntax

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, My name is ${this.name}`);
  }
}

const vishal = new Person("Vishal", 21);
vishal.greet();

//Basic Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog("Badal", "German Shepherd");
dog.speak();
console.log(dog.breed);

//Inheritance with Function Constructors and Prototypes

function Person1(name) {
  this.name = name;
}

Person1.prototype.speak = function () {
  console.log(this.name + " communication is good");
};

function Man(name, city) {
  Person1.call(this, name);
  this.city = city;
}

Man.prototype = Object.create(Person1.prototype);
Man.prototype.constructor = Man;

Man.prototype.speak = function () {
  console.log(this.name + " speaks");
};

const man = new Man("Vishal", "Mumbai");
man.speak();
console.log(man.city);

//Extending Built-In Classes

class MyArray extends Array {
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}

const myarr = new MyArray(1, 2, 3, 4, 5, 6);
console.log(myarr.first());

console.log(myarr.last());

//Use of Super

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hello , My name is ${this.name}`);
  }
}
{
}

class Emp extends Person2 {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  introduce() {
    super.introduce();
    console.log(`I work as a ${this.job}`);
  }
}

const emp = new Emp("Vishal", 21, "Developer");
emp.introduce();

//Inheritance with Static Methods

class Animal1 {
  static Kingdom() {
    return "Animalia";
  }
}

class Cat extends Animal1 {
  static species() {
    return "cats";
  }
}

console.log(Cat.Kingdom());
console.log(Cat.species());

//Multiple Levels of Inheritance

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving.`);
  }
}

class Bird extends Animal2 {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} is flying.`);
  }
}

class Eagle extends Bird {
  constructor(name) {
    super(name);
  }

  hunt() {
    console.log(`${this.name} is hunting.`);
  }
}

const eagle = new Eagle("Eagle");
eagle.move();
eagle.fly();
eagle.hunt();




