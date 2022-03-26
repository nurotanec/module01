'use strict';

const getAveragePriceGoods = (arr) => {
    let a = 0, b = 0;
    for (const elem of arr) {
        a += elem[0];
        b += elem[1];
    }

    return Math.round(b/a);
}

const newAllСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];

console.log('Средняя стоимость одного товара в магазине: ', getAveragePriceGoods(newAllСashbox));