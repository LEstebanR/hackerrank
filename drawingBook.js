const pageCount = (n, p) => {
  const pages = [];
  let index;

  for (let i = 0; i <= n; i += 2) {
    i == n ? pages.push([i]) : pages.push([i, i + 1]);
  }

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].includes(p)) index = i;
  }

  const reverse = pages.length - index - 1;

  console.log(pages, index, reverse);

  return Math.min(index, reverse);
};

console.log(pageCount(5, 4));
