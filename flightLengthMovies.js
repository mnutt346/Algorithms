/*
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/

const flightLengthMovies = (flightLength, movieLengths) => {
  let moviesSeenLengths = new Set();

  for (let length of movieLengths) {
    let firstMovieLength = length;
    let secondMovieLength = flightLength - firstMovieLength;

    if (moviesSeenLengths.has(secondMovieLength)) {
      return true;
    }

    moviesSeenLengths.add(firstMovieLength);
  }
  return false;
};

console.log(flightLengthMovies(6, [1.5, 2.5, 4, 3, 2.2, 3.8]));
console.log(flightLengthMovies(2, [2, 1.9, 1.4, 1.1, 0.4]));
