'use strict';

const generate = () => Math.floor(Math.random() * 11);

const recursiveGenerate = (arr) => {
  arr.push(generate());
  if (arr.length < 50) {
    return recursiveGenerate(arr);
  } else {
    return arr;
  }
};

const someArr = [];
console.log(recursiveGenerate(someArr));
