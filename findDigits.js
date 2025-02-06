const findDigits = (n) => {
  let answer = 0;

  n.toString().split('').map((digit) => {
    console.log(digit)
    if (n % digit === 0) {
      answer++;
    }
  });

  return answer;
}


console.log(findDigits(1012)) // 3