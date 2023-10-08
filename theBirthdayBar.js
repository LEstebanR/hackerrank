// Link: https://www.hackerrank.com/challenges/the-birthday-bar/

// Complete the birthday function below.

// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month

// 1. Loop through the array
// 2. Add the first m elements together
// 3. If the sum is equal to d, increment count
// 4. Move to the next element
// 5. Repeat steps 2-4 until the end of the array
// 6. Return count

const birthday = (s, d, m) => {
  let count = 0;
  s.map((el, i) => {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }
    if (sum === d) {
      count++;
    }
  });
  return count;
};

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
