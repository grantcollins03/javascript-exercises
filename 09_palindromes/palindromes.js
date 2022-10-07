const palindromes = function (str) {
    let array = str
        .toLowerCase()
        .replace(/[.,/#!$%^&*;:{}=-_`~()<> ]/g, '')
        .split('');
    let reversed = [...array].reverse();
    return (array.join('') === reversed.join(''))
};

// Do not edit below this line
module.exports = palindromes;
