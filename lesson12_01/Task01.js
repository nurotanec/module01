'use strict';

const generateWithRanges = (len, n, m) => {
  const finalArray = [];
  let min; let max;
  if (n > m) {
    min = m;
    max = n;
  } else {
    min = n;
    max = m;
  }

  for (let i = 0; i < len; i++) {
    finalArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return finalArray;
};

const gameData = {
  correctNumber: null,
  numberOfTries: null,
  answers: [],
  message: 'Угадайте число',
};

const gameBot = (gameData) => {
  console.log(gameData);
  if (gameData.correctNumber === null) {
    const m = Number(prompt('введите первое число диапазона'));
    const n = Number(prompt('введите второе число диапазона'));

    gameData.correctNumber = generateWithRanges(1, m, n)[0];

    gameData.numberOfTries = Math.floor(Math.abs(m - n) * 0.3);
    gameBot(gameData);
  } else {
    if (gameData.numberOfTries === 0) {
      alert(`игра закончена, ответ был ${gameData.correctNumber}`);
    } else {
      const answer = prompt(gameData.message);

      if (answer === null) {
        return; // end the game if cancel is pressed
      }

      const guess = Number(answer); // convert to number

      if (Number.isNaN(guess)) { // check for valid input
        gameData.message = 'введите число!';
        return gameBot(gameData);
      } else {
        if (gameData.answers.includes(guess)) {
          gameData.message = 'Это число вы уже вводили';
          return gameBot(gameData);
        } else {
          gameData.answers.push(guess);
        }
        if (guess === gameData.correctNumber) {
          alert('Ты угадал, молодец!');
          return;
        } else if (guess < gameData.correctNumber) {
          gameData.message = 'больше';
        } else if (guess > gameData.correctNumber) {
          gameData.message = 'меньше';
        } else {
          gameData.message = 'произошла ошибка';
        }
      }
      gameData.numberOfTries--;
      return gameBot(gameData);
    }
  }
};

gameBot(gameData);
