'use strict';

const generate = (len) => {
    const finalArray = [];

    for (let i = 0; i < len; i++) {
        finalArray.push(Math.floor(Math.random() * 100) + 1);
    }

    return finalArray;
}

console.log(generate(20));