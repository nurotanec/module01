'use strict';

const generateWithRanges = (len, n, m) => {
    const finalArray = [];
    let min, max;
    if (n > m) {
        min = m;
        max = n;
    } else {
        min = n;
        max = m;
    }

    for (let i = 0; i < len; i++) {
        finalArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return finalArray;
}

console.log(generateWithRanges(1, 1, 15));