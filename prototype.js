//prototype Property

function Person(first, last, age, city) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.city = city;
}

//add new properties to object constructors

Person.prototype.nationality = "English";

let p1 = new Person("Vishal", "Vanjari", 21, "Shirpur");

console.log(p1);
console.log(p1.nationality);

//add new methods to objects constructors

Person.prototype.fullname = function () {
  return this.firstName + " " + this.lastName;
};

console.log(p1.fullname());

//Adding Properties to the Prototype

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.wheels = 4;

const car1 = new Car("Toyota", "fortuner");
const car2 = new Car("Honda", "Civic");

console.log(car1.wheels);
console.log(car2.wheels);

car1.wheels = 6;
console.log(car1.wheels);
console.log(car2.wheels);

//

Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum());

//Prototypal Inheritance

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog("Rex", "Labrador");
dog.speak(); 
