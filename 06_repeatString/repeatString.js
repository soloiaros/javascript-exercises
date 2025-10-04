const repeatString = function(string, timesRepeated) {
    if (timesRepeated < 0) return 'ERROR';
    outputString = ''
    for (let i = 0; i < timesRepeated; i++) {
        outputString += string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
