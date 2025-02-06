const kaprekarNumber = (p, q) => {
  let ans = [];
  for (let i = p; i <= q; i++) {
    let digits = i.toString().split("");
    let d = digits.length;
    let square = Math.pow(i, 2).toString();
    let r = square.substring(square.length - d);
    let l = square.substring(0, square.length - d);
    if (l === "") {
      l = 0;
    }
    if (parseInt(r) + parseInt(l) === i) {
      ans.push(i);
    }
  }
  if (ans.length === 0) {
    return "INVALID RANGE";
  } else {
    return ans.join(" ");
  }
};

console.log(kaprekarNumber(100, 300));
