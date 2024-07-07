// Basic Closure function

function outer() {
  let str = "Hello from Inner function";
  function inner() {
    console.log(str);
  }
  return inner;
}

const closure = outer();
closure();

//Closure with Parameters

function greeting(greet) {
  return function (name) {
    console.log(`${greet}, ${name}`);
  };
}   
const sayHello = greeting("Hello");
sayHello("Vishal");
sayHello("Nikhil");

const sayHi = greeting("Hii");
sayHi("Yamini");

//Closure for Data Privacy

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());

//Closures with Timeout

function printNumber() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// printNumber();

function delayedGreeting(name) {
  let message = `Hello, ${name}!`;

  setTimeout(() => {
    console.log(message);
  }, 1000);
}

delayedGreeting("Jayesh");

//Maintaining State in Closures

function createLogger() {
  let logs = [];

  return {
    log(msg) {
      logs.push(msg);
      console.log(`Logged : ${msg}`);
    },
    getLogs() {
      return logs;
    },
  };
}

const logger = createLogger();
logger.log("First log");
logger.log("Second Log");
console.log(logger.getLogs());

//Closure with Immediately Invoked Function Expression (IIFE)

const counterFun = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    },
  };
})();

counterFun.increment();
counterFun.increment();
counterFun.decrement();
console.log(counterFun.getCount());
