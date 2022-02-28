const findTheOldest = function(list) {
    for (i = 0;i < list.length; i++) {
        let oldestName;
        let oldestYear = 2022;
        for (key in list[i]) {
            if (key === "yearOfBirth") {
                if (list[i][key] < oldestYear) {
                    oldestYear = list[i][key]
                    oldestName = list[i]['name']
                }
            }
        }
    }
    return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;
