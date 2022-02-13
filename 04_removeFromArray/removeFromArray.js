const removeFromArray = function(array,...rest) {
    console.log(rest)
    for (var i = 0; i < array.length; i++) {
        for (var z = 0; z < rest.length; z++) {
            if (array[i] === rest[z]) {
                var new_Array = array.splice(i,1);
            }
        }

    }
    return new_Array;

};

// Do not edit below this line
module.exports = removeFromArray;
