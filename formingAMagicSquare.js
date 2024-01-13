const formingMagicSquare = (s) => {
  // const unique = new Set();
  // const repeated = new Set();
  // const all = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // let ans = 0;

  // for (let fila of s) {
  //   for (let element of fila) {
  //     if (all.has(element)) {
  //       all.delete(element);
  //     }
  //     if (unique.has(element)) {
  //       repeated.add(element);
  //     } else {
  //       unique.add(element);
  //     }
  //   }
  // }

  // const missing = Array.from(all);
  // const arrayrepeated = Array.from(repeated);

  // const sum = (a) => a.reduce((acc, el) => acc + el, 0);

  // const sumMissing = sum(missing);
  // const sumRepeated = sum(arrayrepeated);

  // console.log(missing, arrayrepeated);

  // for (let i = 0; i < arrayrepeated.length; i++) {
  //   ans = ans + Math.abs(arrayrepeated[i] - missing[i]);
  // }

  // return ans;

  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity;

  for (let magic of magicSquares) {
    let cost = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cost += Math.abs(s[i][j] - magic[i][j]);
      }
    }
    minCost = Math.min(minCost, cost);
  }

  return minCost;
};

console.log(
  formingMagicSquare([
    [4, 5, 8],
    [2, 4, 1],
    [1, 9, 7],
  ])
);
