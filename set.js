class CostumSet {
  constructor() {
    this.data = [];
  }

  //Add element in set

  add(element) {
    if (!this.has(element)) {
      this.data.push(element);
    }
  }

  // Delete element from set

  delete(element) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === element) {
        this.data.splice(i, 1);
      }
    }
  }

  //Cheack whether element present in set or not

  has(element) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === element) {
        return true;
      }
    }
    return false;
  }

  //Print all set Values

  values() {
    for (let i = 0; i < this.data.length; i++) {
      console.log("Elements are : ", this.data[i]);
    }
  }

  //Clear the full Set i.e Make it empty

  clear() {
    this.data = [];
  }

  // return the Size of set

  size() {
    return this.data.length;
  }
}

let set = new CostumSet();
set.add(25);
set.add(50);
set.add(75);
set.values();
console.log(set.has(25));
console.log("Size of set is : ", set.size());
set.clear();
console.log("Size of set is : ", set.size());
set.add(12);
set.add(75);
set.add(69);
set.values();
console.log("Size of set is : ", set.size());
set.delete(75);
console.log("Size of set is : ", set.size());
set.values();
