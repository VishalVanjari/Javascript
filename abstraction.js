//Abstraction

class Carr {
  #make;
  #model;
  #year;

  constructor(make, model, year) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
  }

  getMake() {
    return this.#make;
  }

  getModel() {
    return this.#model;
  }

  getYear() {
    return this.#year;
  }

  setMake(make) {
    this.#make = make;
  }

  setModel(model) {
    this.#model = model;
  }

  setYear(year) {
    this.#year = year;
  }
}

const carr = new Carr("Honda", "Civic", 2020);
console.log(carr.getMake());
console.log(carr.getModel());
console.log(carr.getYear());
carr.setYear(2021);
console.log(carr.getYear());

//Abstract Classes

class Vehicle {
  constructor(type) {
    if (this.constructor === Vehicle) {
      throw new Error(
        'Abstract class "Vehicle" cannot be instantiated directly.'
      );
    }
    this.type = type;
  }

  start() {
    throw new Error('Method "start()" must be implemented.');
  }
}

class twoWheeler extends Vehicle {
  constructor(type, make, model) {
    super(type);
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting...`);
  }
}

const myCar = new twoWheeler("Bike", "Kawasaki", "Ninja H2r");
myCar.start();

//Abstraction with Composition

const canDrive = {
  drive() {
    console.log(`${this.make} is driving.`);
  },
};

const canFly = {
  fly() {
    console.log(`${this.make} is flying.`);
  },
};

class Vehicle2 {
  constructor(make) {
    this.make = make;
  }
}

class Car2 extends Vehicle2 {
  constructor(make) {
    super(make);
    Object.assign(this, canDrive);
  }
}

class Airplane extends Vehicle2 {
  constructor(make) {
    super(make);
    Object.assign(this, canFly);
  }
}

const veh = new Car2("TATA");
const airplane = new Airplane("Air India");

veh.drive();
airplane.fly();
