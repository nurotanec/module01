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
    const category = prompt('Категория товара');
    const price = Number(prompt('Цена товара'));

    console.log('Наименование товара: ', typeof(title));
    console.log('Количество товара: ', typeof(amount));
    console.log('Категория товара: ', typeof(category));
    console.log('Цена товара: ', typeof(price));

    console.log(`На складе есть ${amount} единиц товара "${category} ${title}" на сумму ${price * amount} долларов`);
}
