const countingValleys = (steps, path) => {
  const coordinates = [];
  let ans = 0;

  for (let i = 0; i < path.length; i++) {
    if (i == 0) {
      if (path[i] == "D") {
        coordinates.push(-1);
      } else {
        coordinates.push(1);
      }
    } else {
      if (path[i] == "D") {
        coordinates.push(coordinates[i - 1] - 1);
      } else {
        coordinates.push(coordinates[i - 1] + 1);
      }
    }
  }

  if (coordinates[0] == -1) ans = ans + 1;

  coordinates.map((coord, index) => {
    if (coord == 0 && coordinates[index + 1] == -1) ans += 1;
  });

  return ans;
};

console.log(
  countingValleys(12, [
    "D",
    "D",
    "U",
    "U",
    "D",
    "D",
    "U",
    "D",
    "U",
    "U",
    "U",
    "D",
  ])
);
