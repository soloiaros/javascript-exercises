const fibonacci = function(n) {
  if (n < 0) return 'OOPS';

  let lastEntries = [0, 1];
  if (n == 0 || n == 1) {return lastEntries[n]} else {
    for (let i = 1; i < n; i++) {
      lastEntries.push(lastEntries[0] + lastEntries[1]);
      lastEntries.shift(1);
    };
    return lastEntries[1];
  };
};

// Do not edit below this line
module.exports = fibonacci;
