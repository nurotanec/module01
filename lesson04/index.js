'use strict';

{
    const title = 'iPhone';
    const amount = 5;
    const category = 'Smartphones';
    const price = 1500;
    // console.log('name: ', title);
    // console.log('Общая сумма товара: ', price * amount);
}

{
    const title = 'iPad';
    const amount = 5;
    const category = 'Tablet';
    const price = 1500;
    // console.log('name: ', title);
    // console.log('Общая сумма товара: ', price * amount);
}

{
    const title = prompt('Наименование товара');
    const amount = Number(prompt('Количество товара'));

    if (Number.isNaN(amount)) {
        console.log('Вы ввели некорректные данные для количества');
    }

    const category = prompt('Категория товара');
    const price = Number(prompt('Цена товара'));

    if (Number.isNaN(price)) {
        console.log('Вы ввели некорректные данные для цены');
    }
}
