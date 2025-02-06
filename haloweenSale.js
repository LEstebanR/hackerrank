function howManyGames(p, d, m, s) {
  let budget = s;
  let games = 0;
  let price = p;
  if (budget < price) {
    return 0;
  }
  do {
    budget -= price;
    if (price - d > m) {
      price = price - d;
    } else {
      price = m;
    }
    games++;
    console.log(price, games, budget);
  } while (budget >= price);

  return games;
}

console.log(howManyGames(100, 1, 1, 99)); // 6
