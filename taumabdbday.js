function taumBday(b, w, bc, wc, z) {
  // Write your code here

  const costTwoColors = b * bc + w * wc;
  const allWhites = (b + w) * wc + b * z;
  const allBlacks = (b + w) * bc + w * z;
  console.log(costTwoColors, allWhites, allBlacks);
  return Math.min(costTwoColors, allWhites, allBlacks);
}

// console.log(taumBday(443463982, 833847400, 429734889, 628664883, 610875522));
console.log(taumBday(623669229, 435417504, 266946955, 600641444, 515391879)); // 12
