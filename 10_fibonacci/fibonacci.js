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
fibonacci("6");


//  use unshift() to put elements at the beginning of an array, push() to put them at the end
//PSEUDO

//sent function a num
//the (num - 1) is the index of the element in a fibonacci array
//need to add the previous two elements together somehow
//basically, create a new array with the length up to array[num - 1]
//from that array, grab the last element or array[num - 1]

//is there a way to use an array method on this?

// Do not edit below this line
module.exports = fibonacci;
