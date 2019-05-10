/* Calculate the number of cheese sticks required to feed X amount of fellows.

Every fellow needs 2 cheese sticks minimum. For every 5 fellows, an additional cheese stick is required per fellow. */

const cheeseStickConsumption = numberOfFellows => {
  let additionalSticks = Math.floor(numberOfFellows / 5);

  let cheeseSticksPerFellow = 2 + additionalSticks;

  return numberOfFellows * cheeseSticksPerFellow;
};
