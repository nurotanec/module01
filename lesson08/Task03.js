'use strict';

const generateOddInt = (min, max) => {
    const newValue = Math.floor(Math.random() * ((max - min + 1)) + min);
    return newValue % 2 === 0 ? generateOddInt(min, max) : newValue;
}
const generateEvenInt = (min, max) => {
    return Math.floor(Math.random() * ((max - min + 1) / 2) + min / 2) * 2;
}

const generateOddOrEven = (len, n, m, option) => {
    const finalArray = [];
    let min, max;
    if (n > m) {
        min = m;
        max = n;
    } else {
        min = n;
        max = m;
    }

    if (option === 'even') {
        if (min % 2 !== 0) min += 1;
        for (let i = 0; i < len; i++) {
            finalArray.push(generateEvenInt(min, max));
        }
    } else if (option === 'odd') {
        for (let i = 0; i < len; i++) {
            finalArray.push(generateOddInt(min, max));
        }
    } else {
        finalArray.push(generateWithRanges(len, min, max));
    }

    return finalArray;
}

console.log(generateOddOrEven(20, 7, 10, 'even'));