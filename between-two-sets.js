// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

/**
 * 1. Find all the number between the two arrays
 * 2. Create an array of all the numbers between the two arrays
 * 3. Find the numbers that are divisibles by the numbers in two arrays
 * 4. return the count of the numbers
 */

const getTotalX = (a, b) => {
  let ans = 0;
  const joinArrays = [...a, ...b].sort((a, b) => a - b);
  const min = joinArrays[0];
  const max = joinArrays[joinArrays.length - 1];
  const allValues = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  for (let i in allValues) {
    if (a.every((num) => allValues[i] % num === 0)) {
      if (b.every((num) => num % allValues[i] === 0)) {
        ans++;
      }
    }
  }

  console.log(allValues);

  return ans;
};

console.log(getTotalX([2, 6], [24, 36]));
