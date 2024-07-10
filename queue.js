class CustomQueue {
  constructor() {
    this.data = [];
  }

  //Add element at end of queue

  enQueue(element) {
    this.data.push(element);
  }

  //Remove element fromm starting of queue

  deQueue() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
    }
    let front = this.data[0];
    this.data.shift();
    return front;
  }

  ////cheack queue is empty or not

  isEmpty() {
    return this.data.length === 0;
  }

  //Shift the elements

  shift() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  //Print the Queue

  print() {
    for (let i = 0; i < this.data.length; i++) {
      console.log("Element ", i + 1, " :", this.data[i]);
    }
  }

  //Give size of queue

  size() {
    return this.data.length;
  }
}

let queue = new CustomQueue();
queue.enQueue(52);
queue.enQueue(65);
queue.enQueue(85);
queue.print();
console.log("Queue is Empty : ", queue.isEmpty());
queue.deQueue();
queue.print();
console.log("Size of Queue is : ", queue.size());
queue.deQueue();
queue.deQueue();
console.log("Size of Queue is : ", queue.size());
queue.deQueue();
