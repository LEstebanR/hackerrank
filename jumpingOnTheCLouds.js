const jumpingOnTheCLouds = (c, k) => {
  let energy = 100;
  let i = 0;
  do {
    energy -= 1;
    i = (i + k) % c.length;
    if (c[i] === 1) {
      energy -= 2;
    }
  } while (i !== 0);
  return energy;
};

console.log(jumpingOnTheCLouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3)); // 80
