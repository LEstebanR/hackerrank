// https://www.hackerrank.com/challenges/day-of-the-programmer/

const isLeap = (year) => {
  if (year < 1917) {
    if (year % 4 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
      return true;
    } else {
      return false;
    }
  }
};

const dayOfProgrammer = (year) => {
  if (year == 1918) return "26.09.1918";
  const isLeap = (year) => {
    if (year < 1917) {
      if (year % 4 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
        return true;
      } else {
        return false;
      }
    }
  };
  if (isLeap(year)) {
    return `12.09.${year}`;
  } else {
    return `13.09.${year}`;
  }
};

console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));
