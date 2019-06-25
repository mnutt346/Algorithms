const overlappingIntervals = arr => {
  let roomCount = 0,
    startTime = 0,
    endTime = 1;

  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < arr.length; i++) {
    if (
      arr[i][startTime] < arr[i - 1][endTime] &&
      arr[i][endTime] > arr[i - 1][endTime]
    ) {
      roomCount++;
    }
  }

  return roomCount === 0 ? 1 : roomCount;
};

console.log(overlappingIntervals([[30, 75], [0, 50], [60, 150]]));
console.log(overlappingIntervals([[30, 70], [10, 20], [40, 60]]));
