'use strict';

const isPrime = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(5));
console.log(isPrime(151));
console.log(isPrime(911));
console.log(isPrime(1987));
console.log('-----')
console.log(isPrime(198));
console.log(isPrime(150));
console.log(isPrime(4));