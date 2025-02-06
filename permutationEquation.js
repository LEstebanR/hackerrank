const permutationEquation = (p) => {
  let result = [];
  for (let i = 1; i <= p.length; i++) {
    result.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return result;
};

console.log(permutationEquation([2, 3, 1])); // [2, 3, 1]
