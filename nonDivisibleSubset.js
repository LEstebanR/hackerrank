const nonDivisibleSubset = (k, s) => {
  const remainders = new Array(k).fill(0);
  console.log(remainders);
  s.forEach((num) => {
    remainders[num % k]++;
  });
  let count = 0;
  for (let i = 1; i <= k / 2; i++) {
    if (i !== k - i) {
      count += Math.max(remainders[i], remainders[k - i]);
    }
  }
  count += Math.min(remainders[0], 1);
  if (k % 2 === 0) {
    count += 1;
  }
  return count;
};

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
