const linkedListIntersection = (list1, list2) => {
  let node1 = list1,
    node2 = list2,
    node1Count = 0,
    node2Count = 0;
  // Find lengths of the two lists
  while (node1) {
    node1Count++;
    node1 = node1.next;
  }

  while (node2) {
    node2Count++;
    node2 = node2.next;
  }
  // Determine which is longer and cut off the beginning of the list up to the value of diff, making the lists the same length
  // and thus iterable in parallel
  let diff = Math.abs(node1Count - node2Count),
    start1 = list1,
    start2 = list2;

  if (node1Count > node2Count) {
    for (let i = 0; i < diff; i++) {
      start1 = start1.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      start2 = start2.next;
    }
  }

  // Iterate through both lists and check each node against the other
  // If match => return current node
  // Otherwise, loop terminates and defaults to null
  while (start1 && start2) {
    if (start1 === start2) return start1;
    else {
      start1 = start1.next;
      start2 = start2.next;
    }
  }

  return null;
};
