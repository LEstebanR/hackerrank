const extraLongFactorial = (n) => {
  let result = BigInt(1);
  for (let i = 1; i <= n; i++) {
    result *= BigInt(i);
  }
  return result.toString();
};

console.log(extraLongFactorial(25)); // 15511210043330985984000000
