//Basic Generators

function* basicGenerator() {
  yield "1", yield "2", yield "3";
}

const gen = basicGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//Generator with Loop

function* countGenerator() {
  let count = 0;
  while (count < 5) {
    yield count++;
  }
}

const counter = countGenerator();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

let myVar = function* () {
  yield "a", yield "b", yield "c";
};

let str = "";
for (let val of myVar()) {
  str = str + val;
}

console.log(str);

//Fibonacci Sequence Generator

function* FibonacciGenerator() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = FibonacciGenerator();
console.log("Fibonaccci Series");
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

//Generator with Arguments

function* rangeGenerator(start, end) {
  while (start <= end) {
    yield start++;
  }
}

const range = rangeGenerator(1, 5);
console.log("Number between range");
console.log(range.next().value);
console.log(range.next().value);
console.log(range.next().value);
console.log(range.next().value);
console.log(range.next().value);

//Generator to Generate Unique IDs

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const genID = idGenerator();
console.log("Unique ID : ");
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);

//Delegating Generators

function* GeneratorA() {
  yield "A1";
  yield "A2";
}

function* GeneratorB() {
  yield "B1";
  yield* GeneratorA();
  yield "B2";
}

const gene = GeneratorB();
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);

//Infinite Generator

function* infiniteGenerator() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const infinite = infiniteGenerator();
console.log("Infinite Generator :");
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
