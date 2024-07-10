//Custom Array to implement the Array DS

class CustomArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // Add an element to the end of the array
  pushElement(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }

  // Remove the last element from the array
  popElement() {
    if (this.length === 0) {
      return undefined;
    }
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  // Get an element at a specific index
  getElement(index) {
    return this.data[index];
  }

  // Delete an element at a specific index
  deleteElement(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new CustomArray();
array.pushElement(1);
array.pushElement(2);
array.pushElement(3);
console.log(array);
array.popElement();
console.log(array);
array.deleteElement(0);
console.log(array);
