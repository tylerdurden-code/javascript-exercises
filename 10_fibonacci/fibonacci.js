const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return 'OOPS'
    }
    let list = [0,1];
    let sum = 0;
    for (i = 0;i < num;i++) {
        list.push(list[i] + list[i + 1]);
    }
    return list[num];
};

// Do not edit below this line
module.exports = fibonacci;
