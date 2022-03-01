const findTheOldest = function(list) {
    let maxAge = list[1].yearOfDeath - list[1].yearOfBirth;
    let oldestName = list[1].name;
    let ite = 1;
    for (i = 0; i < list.length; i++) {
        if (list[i].yearOfDeath === undefined) {
            let date = new Date();
            let year = date.getFullYear()
            let age = year - list[i].yearOfBirth
            if (age > maxAge) {
                maxAge = age;
                oldestName = list[i].name;
                ite = i;
            }
            break;
        }
        let age = (list[i].yearOfDeath - list[i].yearOfBirth);
        if (age > maxAge) {
        maxAge = age;
        oldestName = list[i].name;
        ite = i;
        }
    }
    return list[ite];
};

// Do not edit below this line
module.exports = findTheOldest;
