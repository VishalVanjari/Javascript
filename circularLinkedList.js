class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CostumCircularLinkedList {
  constructor() {
    this.headd = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let prev = null;

    while (current.data !== data) {
      if (current.next === this.head) {
        return;
      }
      prev = current;
      current = current.next;
    }
    if (current === this.head && current.next === this.head) {
      this.head = null;
      return;
    }

    if (current === this.head) {
      prev = this.head;
      while (prev.next !== this.head) {
        prev = prev.next;
      }
      this.head = current.next;
      prev.next = this.head;
      return;
    }

    if (current.next === this.head) {
      prev.next = this.head;
      return;
    }

    prev.next = current.next;
  }

  printList() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

let list = new CostumCircularLinkedList();
list.append(23);
list.append(85);
list.append(65);
list.append(75);
list.printList();
list.prepend(10);
list.printList();
list.delete(10);
list.printList();
