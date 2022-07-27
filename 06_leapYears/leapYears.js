const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

/*
Leap years are years divisible by four (like 1984 and 2004).

if year % 4 === 0 

However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

if year % 100 === 0, then false
unless year % 400 === 0, then true

*/


// Do not edit below this line
module.exports = leapYears;
