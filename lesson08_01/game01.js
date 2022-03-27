'use strict';

const gameBot = () => {
    const number = generate(1)[0];
    let message = 'Угадайте число между 1 и 100'; 
    console.log(number);
    while (true) {
        const answer = prompt(message);
        if (answer === null) {
            break;
        }
        const guess = Number(answer);
        if (Number.isNaN(guess)) {
            message = 'Введи число!';
        } else if (guess === number) {
            alert('Ты угадал, молодец!');
            break;
        } else if (guess < number) {
            message = 'больше';
        } else if (guess > number) {
            message = 'меньше';
        } else {
            message = 'произошла ошибка';
        }
    }
}

gameBot();