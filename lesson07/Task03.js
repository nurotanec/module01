'use strict';

const addPrefix = (arr, prefix) => {
    const finalArr = [];
    for (const elem of arr) {
        finalArr.push(`${prefix} ${elem}`);
    }
    return finalArr;
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
console.log(addPrefix(names, 'Mr'))