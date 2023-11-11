// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

const migrationBirds = (arr) => {
  let ans = 1000000;
  let ansCount = 0;
  let previousCalculated = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] == arr[i] && !previousCalculated.includes(arr[i])) count += 1;
    }
    previousCalculated.push(arr[i]);
    console.log(arr[i], count, ansCount, ans);
    if (count >= ansCount) {
      ansCount = count;
      ans = arr[i];
    }
  }
  return ans;
};

console.log(migrationBirds([1, 4, 4, 4, 5, 3])); // 4
