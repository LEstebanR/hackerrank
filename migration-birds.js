// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

const migrationBirds = (arr) => {
  let frequencyMap = new Map();
  let maxFrequency = 0;
  let mostFrequentBird = null;

  for (let bird of arr) {
    if (!frequencyMap.has(bird)) {
      frequencyMap.set(bird, 1);
    } else {
      frequencyMap.set(bird, frequencyMap.get(bird) + 1);
    }

    if (frequencyMap.get(bird) > maxFrequency) {
      maxFrequency = frequencyMap.get(bird);
      mostFrequentBird = bird;
    }
  }

  return mostFrequentBird;
};

console.log(migrationBirds([1, 4, 4, 4, 5, 3])); // 4
