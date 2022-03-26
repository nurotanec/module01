'use strict';

const capitalize = (str) => {
    if (str !== '') {
        const lower = String(str).toLowerCase();
        return lower.replace(lower[0], lower[0].toUpperCase());
    }
    return '';
}

console.log(capitalize('привет Мир'));