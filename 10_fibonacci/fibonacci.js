const fibonacci = function(num) {
    num = +num;
    let fibArray = [0, 1];
    if (num <= 0) {
        return "OOPS";
    } else {
        for (i = 2; i < (num + 1); i++) {
            let item = fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(item);
        }
    }
    return fibArray[fibArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
