const sumAll = function(numOne, numTwo) {
    const inputSorted = Array.from(arguments).sort((a, b) => a > b ? 1 : -1);
    if (inputSorted[0] < 0 
        || !(inputSorted.every(item => (typeof item === "number")))) return 'ERROR';
    if (!(inputSorted.every(item => Math.floor(item) === item))) return 'ERROR';
    let outputTotal = 0;
    for (let i = inputSorted[0]; i <= inputSorted[1]; i++) {
        outputTotal += i
    }
    return outputTotal;
};

// Do not edit below this line
module.exports = sumAll;
