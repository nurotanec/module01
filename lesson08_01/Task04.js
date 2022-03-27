'use strict';

const isLeapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) return true;
        } else {
            return true;
        }
    }
    return false;
}

const listAllLeapYears = (n, m) => {
    const finalArr = [];
    let min, max;
    if (n > m) {
        min = m;
        max = n;
    } else {
        min = n;
        max = m;
    }
    if (min < 0) min = 0;

    for (let year = min; year <= max; year++) {
        if (isLeapYear(year)) {
            finalArr.push(year);
        }
    }
    return finalArr;
}

console.log(listAllLeapYears(0, 2022))