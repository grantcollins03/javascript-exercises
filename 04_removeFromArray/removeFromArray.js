const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === arguments[i]) {
                array.splice(j, 1);
            } else {
                continue;
            }
        }
    }
    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));


/*
    Write a loop that searches the array for all the arguments. 
    Write 



*/

// Do not edit below this line
module.exports = removeFromArray;



