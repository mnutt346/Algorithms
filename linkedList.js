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
      this.tail = this.head;
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

    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
      this.length++;
    } else {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
    }
    return this;
  }

  get(position) {
    if (position < 0 || position >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < position; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(val, position) {
    let targetNode = this.get(position);
    if (targetNode) {
      targetNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(val, position) {
    if (position < 0 || position > this.length) return false;
    let newNode = new Node(val);
    if (position === this.length) {
      return !!this.push(val);
    } else if (position === 0) {
      return !!this.unshift(val);
    } else {
      let leftNode = this.get(position - 1),
        rightNode = leftNode.next;

      leftNode.next = newNode;
      newNode.next = rightNode;
      this.length++;
    }
  }

  remove(position) {
    if (position < 0 || position >= this.length) return undefined;
    if (position === this.length - 1) return this.pop();
    if (position === 0) return this.shift();

    let leftNode = this.get(position - 1),
      currentNode = leftNode.next,
      rightNode = currentNode.next;

    leftNode.next = rightNode;
    this.length--;
    return currentNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next,
      prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let store = [],
      current = this.head;
    while (current) {
      store.push(current.val);
      current = current.next;
    }
    console.log(store);
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
console.log(list.get(0));
console.log(list.set(8, 2));
console.log(list.get(2));
list.print();
list.reverse();
list.print();
let newList = new LinkedList();

newList.unshift("stuff");
console.log(newList);
newList.push("more stuff");
newList.push("asdf");
newList.push("banana");
console.log(newList.get(1));
console.log(newList.get(3));
console.log(newList.get(-2));
console.log(newList.length);
newList.unshift("ggggg");
console.log(newList.length);
console.log(newList.get(4));
newList.set("bbbbb", 4);
newList.set("fdsa", 1);
console.log(newList.get(4));
console.log(newList.get(3));
console.log(newList);
newList.insert("AAASDFDSF", 3);
console.log(newList.get(3));
console.log(newList.remove(3));
console.log(newList.get(3));
console.log(newList.get(2));
