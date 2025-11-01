const getTheTitles = function(books) {
  return books.reduce((ac, cu) => {
    ac.push(cu.title);
    return ac;
  }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
