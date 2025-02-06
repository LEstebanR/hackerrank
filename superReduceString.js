const superReduceString = (s) => {
  let str = s;
  let i = 0;
  while (i < str.length) {
    if (str[i] === str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2);
      i = 0;
    } else {
      i++;
    }
  }
  return str === "" ? "Empty String" : str;
};

console.log(superReduceString("aaabccddd")); // abd
