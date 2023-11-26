// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

const bonAppetit = (bill, k, b) => {
  const total = bill.reduce((acc, curr) => acc + curr, 0);
  const annaBill = (total - bill[k]) / 2;
  const result = b - annaBill;
  return result === 0 ? "Bon Appetit" : result;
};

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
