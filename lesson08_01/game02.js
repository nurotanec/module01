'use strict';

const gameBot2 = () => {
    const m = Number(prompt('введите первое число диапазона'));
    const n = Number(prompt('введите второе число диапазона'));

    const number = generateWithRanges(1, m, n)[0];
    let message = `Угадайте число между ${m > n ? n : m} и ${m > n ? m : n}`; 
    console.log('otvet: ', number);

    const answers = [];
    const numberOfTries = Math.floor(Math.abs(m - n) * 0.3);
    console.log('numberOfTries: ', numberOfTries);
    
    let i = 0;
    while (i < numberOfTries) {
        console.log('try #', i);
        const answer = prompt(message);
    
        if (answer === null) {
            break; // end the game if cancel is pressed
        }
    
        const guess = Number(answer); // convert to number

        if (Number.isNaN(guess)) { // check for valid input
            message = 'Введи число!';
        } else {
            if (answers.includes(guess)) {
                message = 'Это число вы уже вводили'
                continue;
            } else {
                answers.push(guess);
            }
            if (guess === number) {
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
        console.log(answers);
        i++;
        if (i === numberOfTries) {
            alert(`игра закончена, ответ был ${number}`);
        }
    }
}

gameBot2();