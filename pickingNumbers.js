const pickingNumbers = (a) => {
  let max = 0;
  let map = {};
  for (let i = 0; i < a.length; i++) {
    if (map[a[i]]) {
      map[a[i]]++;
    } else {
      map[a[i]] = 1;
    }
  }
  for (let i = 0; i < a.length; i++) {
    let current = map[a[i]] + (map[a[i] + 1] || 0);
    max = Math.max(max, current);
  }
  return max;
};

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // 3

const calculateWeight = (earthWeight, planet) => {
  const planets = [
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  if (!planets.includes(planet)) {
    return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune.";
  }
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
    case "Venus":
      return earthWeight * 0.907;
    case "Mars":
      return earthWeight * 0.377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * 0.916;
  }
};
