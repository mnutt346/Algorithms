class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head,
      newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    if (this.length === 0) {
      this.push(new Node(val));
    }
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list = new LinkedList();

list.push(1);
console.log(list);
list.push(2);
console.log(list);
list.push(3);
list.push(4);
list.pop();
console.log(list);
list.push(5);
list.shift();
console.log(list);
list.unshift(7);
console.log(list);
