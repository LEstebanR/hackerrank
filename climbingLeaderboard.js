const climbingLeaderboard = (ranked, player) => {
  const rank = [];
  const uniqueRanked = [...new Set(ranked)];
  let i = uniqueRanked.length - 1;
  player.forEach((score) => {
    while (i >= 0) {
      if (score >= uniqueRanked[i]) {
        i--;
      } else {
        rank.push(i + 2);
        break;
      }
    }
    if (i < 0) {
      rank.push(1);
    }
  });
  return rank;
};

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])); // [4, 3, 1]
