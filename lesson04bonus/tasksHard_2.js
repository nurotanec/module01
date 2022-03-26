'use strict';

{
    const income = Number(prompt('Введите свой общий доход'));

    if (income >= 0 && income < 15000) {
        console.log(`Налог будет ${income * 0.13} долларов`)
    } else if (income >= 15000 && income < 50000) {
        console.log(`Налог будет ${(income - 15000) * 0.2} долларов`)
    } else if (income >= 50000) {
        console.log(`Налог будет ${(income - 50000) * 0.3} долларов`)
    } else {
        console.log('Введены неправильные данные!')
    }
}