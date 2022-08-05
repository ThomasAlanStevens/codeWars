function sumPowDigSeq(start, n, k) {
  let sumsArr = [start];
  let newStart = start;
  let lastTerm = start;
  for (let i = 0; i < k; i++) {
    lastTerm = String(lastTerm)
      .split("")
      .reduce((total, num, ind) => (total += num ** n), 0);
  }
  for (let i = 0; i < k; i++) {
    newStart = String(newStart)
      .split("")
      .reduce((total, num, ind) => (total += num ** n), 0);
    if (sumsArr.includes(newStart)) {
      return [
        sumsArr.indexOf(newStart),
        sumsArr.slice(sumsArr.indexOf(newStart), i + 1),
        sumsArr.slice(sumsArr.indexOf(newStart), i + 1).length,
        lastTerm,
      ];
    }
    sumsArr.push(newStart);
  }
}
