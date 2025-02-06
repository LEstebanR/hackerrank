function timeConversion(s) {
  const [hour, min, end] = s.split(":");
  const sec = end.slice(0, 2);
  const isAfternoon = end.slice(-2) == "PM" ? true : false;
  const militaryHour = isAfternoon ? Number(hour) + 12 : hour;
  const adjustedHour =
    militaryHour == 24
      ? "00"
      : militaryHour == 12
      ? "12"
      : militaryHour < 10
      ? `0${militaryHour}`
      : militaryHour;

  return `${adjustedHour}:${min}:${sec}`;
}

console.log(timeConversion("12:40:22PM")); // 19:05:45
