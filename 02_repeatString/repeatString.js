const repeatString = function(text,numb) {
    if (numb < 0) {
        return "ERROR"
    }
    let my_Array = [];
    for (i = 0; i < numb; i++) {
        my_Array[i] = text
    }
    my_New_Array = my_Array.join("");
    return my_New_Array

};

// Do not edit below this line
module.exports = repeatString;
