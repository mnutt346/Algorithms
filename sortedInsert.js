const sortedInsert = (stack, element) => {
  if (stack.count === 0 || element <= stack.peek()) {
    stack.push(element);
    return stack;
  }

  let tempStack = [],
    stackLength = stack.count;

  //iterate through the stack
  // pop off the "current" element of the stack and compare the given element to the current and next elements
  // push the current element onto tempStack
  // if the element is <= to the next element
  // push the element onto the stack and break out of the loop
  for (let i = 0; i < stackLength; i++) {
    let current = stack.pop(),
      next = stack.peek();
    tempStack.push(current);
    if (element <= next) {
      stack.push(element);
      break;
    }
  }

  // if the stack is empty after searching for a number lower than the given element,
  // push the element into the the stack at the first position
  if (!stack.count) {
    stack.push(element);
  }

  // while tempStack is not empty,
  // push the last element of tempStack onto the stack
  while (tempStack.length) {
    stack.push(tempStack.pop());
  }
  return stack;
};

let Stack = function(initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function() {
  return !this.count;
};

Stack.prototype.peek = function() {
  return this.store[this.count];
};

Stack.prototype.push = function(val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};

let stuff = new Stack(20);
stuff.push(15);
stuff.push(10);
console.log(sortedInsert(stuff, 5).peek());

let moreStuff = new Stack();
console.log(sortedInsert(moreStuff, 10));

let stacksOnStacks = new Stack();
stacksOnStacks.push(9);
stacksOnStacks.push(7);
stacksOnStacks.push(5);
stacksOnStacks.push(3);
console.log(sortedInsert(stacksOnStacks, 6));

let what = new Stack();
what.push(5);
what.push(3);
what.push(2);
what.push(1);
console.log(sortedInsert(what, 4));

let bottom = new Stack();
bottom.push(4);
bottom.push(3);
bottom.push(1);
bottom.push(0);
console.log(sortedInsert(bottom, 6));
