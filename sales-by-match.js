const sockMerchant = (n, ar) => {
  let pairs = 0;
  const socks = ar.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});

  Object.keys(socks).forEach((key) => {
    pairs += Math.floor(socks[key] / 2);
  });

  return pairs;
};

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
