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
    let newHead = new Node(val);
    if (this.length === 0) {
      this.push(new Node(val));
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
