const equalizerArray = (arr) => {
  const elements = Array.from(new Set(arr));
  let count = 0;

  elements.map((number) => {
    const filtered = arr.filter((el) => el === number);
    if (filtered.length > count) {
      count = filtered.length;
    }
  });

  return arr.length - count;
};

console.log(equalizerArray([3, 3, 2, 1, 3]));
