//Custom Stack to implement the Stack DS
//FILO

class CostumStack {
  constructor() {
    this.data = [];
  }

  //Add element to top of stack

  push(element) {
    this.data.push(element);
    console.log(`Element ${element} is push in stack`);
  }

  //remove element from top of stack

  pop() {
    if (this.isEmpty()) {
      return "Stack is Underflow";
    }
    return this.data.pop();
  }

  //peek top element withoud deleting it

  peek() {
    if (this.isEmpty()) {
      return "No element in stack";
    }
    return this.data[this.data.length - 1];
  }

  //check stack is empty or not

  isEmpty() {
    return this.data.length === 0;
  }

  //return size of stack

  size() {
    return this.data.length;
  }

  //print the stack

  print() {
    console.log("stack elements are :");
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }
}

let stack = new CostumStack();
stack.push(25);
stack.push(50);
stack.push(75);
stack.print();
console.log("Size of stack is : ", stack.size());
stack.pop();
stack.print();
console.log("Stack is Empty : ", stack.isEmpty());
console.log("Peeked element is : ", stack.peek());
console.log("Size of stack is : ", stack.size());
stack.pop();
stack.pop();
console.log("Size of stack is : ", stack.size());
console.log("Stack is Empty : ", stack.isEmpty());
console.log(stack.pop());
