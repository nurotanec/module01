'use strict';

const inverser = (str) => {
    if (str !== null && str !== undefined) {
        let temp = '';
        const len = str.length;
        for (let index = 1; index <= len; index++) {
            temp += str[len-index];
        }
        return temp;
    }
    return '';
}

console.log(inverser('Привет мир'));