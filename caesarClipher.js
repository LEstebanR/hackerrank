function caesarCipher(s, k) {
  const doubleAlphabet =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() != s[i].toLowerCase()) {
      if (s[i] == s[i].toUpperCase()) {
        ans.push(
          doubleAlphabet[alphabet.indexOf(s[i].toLowerCase()) + k].toUpperCase()
        );
      } else {
        ans.push(doubleAlphabet[alphabet.indexOf(s[i].toLowerCase()) + k]);
      }
    } else {
      ans.push(s[i]);
    }
  }
  return ans.join("");
}

console.log(caesarCipher("www.abc.xy", 87));
