const getTheTitles = function(list) {
    let titles = [];
    for (i = 0; i < list.length; i++) {
        for (let key in list[i]) {
            console.log(key)
            if (key === 'title') {
                titles.push(list[i][key])
            }
        }
    }   
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
