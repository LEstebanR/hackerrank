const electronicShop = (keyboards, drives, b) => {
  let expense = 0;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] > expense && keyboards[i] + drives[j] <= b)
        expense = keyboards[i] + drives[j];
    }
  }

  return expense == 0 ? -1 : expense;
};

console.log(electronicShop([3, 1], [5, 2, 8], 10));
