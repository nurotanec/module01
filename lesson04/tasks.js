'use strict';

{
    const rain = Math.round(Math.random);
    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    }
    if (rain === 0) {
        console.log('Дождя нет!');
    }
}

{
    const mathPoints = Number(prompt('Введите кол-во баллов по математике'));
    const rusPoints = Number(prompt('Введите кол-во баллов по русскому языку'));
    const itPoints = Number(prompt('Введите кол-во баллов по информатике'));

    const total = mathPoints + rusPoints + itPoints;

    if (total >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else {
        console.log('К сожалению, вы не поступили на бюджет!')
    }
}