'use strict';

const capitalize = (sentence) => {
    if (sentence !== '') {
        const lower = String(sentence).toLowerCase();
        return lower.replace(lower[0], lower[0].toUpperCase());
    }
    return '';
}

console.log(capitalize('привет Мир'));