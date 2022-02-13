const reverseString = function(text) {
    var splitString = text.split("")
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
