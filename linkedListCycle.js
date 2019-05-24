/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.
*/

const hasCycle = linkedList => {
  let slow = linkedList,
    fast = linkedList;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};
