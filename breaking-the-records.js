/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
*/

const breakingRecords = (scores) => {
  let min = scores[0];
  let max = scores[0];
  let hightestTimes = 0;
  let lessTimes = 0;

  for (let i = 1; i <= scores.length - 1; i++) {
    if (scores[i] < min) {
      min = scores[i];
      lessTimes++;
    }

    if (scores[i] > max) {
      max = scores[i];
      hightestTimes++;
    }
  }

  return [hightestTimes, lessTimes];
};

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
