//Encapsulation

function Person3(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setName: function (newName) {
      _name = newName;
    },
    setAge: function (newAge) {
      _age = newAge;
    },
  };
}

const per = Person3("Nikhil", 22);
console.log(per.getName());
console.log(per.getAge());
per.setAge(30);
console.log(per.getAge());

//with classes

class Person4 {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }

  setName(newName) {
    this.#name = newName;
  }
  setAge(newAge) {
    this.#age = newAge;
  }
}

const pers = new Person4("Yamini", 24);
console.log(pers.getName());
console.log(pers.getAge());
pers.setAge(35);
console.log(pers.getAge());
