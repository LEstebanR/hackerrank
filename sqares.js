const squares = (a, b) => {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      count++;
    }
  }
  return count;
};

const squares2 = (a, b) =>
  Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
