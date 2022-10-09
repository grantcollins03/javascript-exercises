const findTheOldest = function(array) {
    let oldest = array.reduce((previousPerson, currentPerson) => {
        if (!previousPerson.yearOfDeath) {
         previousPerson['yearOfDeath'] = new Date().getFullYear();
        }
        if ((currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (previousPerson.yearOfDeath - previousPerson.yearOfBirth)) {
            return currentPerson;
        } else {
            return previousPerson;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
