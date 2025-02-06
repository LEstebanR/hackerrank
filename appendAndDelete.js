const appendAndDelete = (s, t, k) => {
  let count = 0;
  let sArr = s.split("");
  let tArr = t.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      count = sArr.length - i + tArr.length - i;
      break;
    }
  }

  if (count === 0) {
    count = Math.abs(sArr.length - tArr.length);
  }

  return count <= k && (count % 2 === k % 2 || count < k) ? "Yes" : "No";
};

console.log(appendAndDelete("aaaaaaaaaa", "aaaaa", 7)); // Yes
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // Yes
console.log(appendAndDelete("qwerasdf", "qwerbsdf", 6)); // No
console.log(appendAndDelete("y", "yu", 2)); // No
console.log(appendAndDelete("ashley", "ash", 2)); // No
