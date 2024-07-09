//Polymorphism - Method Overriding

class Animal3 {
  speak() {
    console.log("Animal speaks");
  }
}

class Dogs extends Animal3 {
  speak() {
    console.log("Dog barks");
  }
}

class Cats extends Animal3 {
  speak() {
    console.log("Cat Meows");
  }
}

const dogs = new Dogs();
const cats = new Cats();

dogs.speak();
cats.speak();



//Polymorphism


class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

function printArea(shape) {
  console.log(shape.area());
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

printArea(circle);
printArea(rectangle);

//Polymorphism with Abstract Classes

class AbstractVehicle {
  drive() {
    throw new Error('Method "drive" must be implemented');
  }
}

class Car extends AbstractVehicle {
  drive() {
    console.log("Car drives");
  }
}

class Bike extends AbstractVehicle {
  drive() {
    console.log("Bike drives");
  }
}

function driveVehicle(vehicle) {
  vehicle.drive();
}

const car = new Car();
const bike = new Bike();

driveVehicle(car);
driveVehicle(bike);
