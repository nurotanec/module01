'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const compGuess = (count) => {
    return count % 2 === getRandomIntInclusive(0, 1) ? 1 : -1;
  };

  const showResult = (count) => {
    console.log(`Количество шариков:
Игрок: ${count.player}
Бот: ${count.computer}`);
  };

  const game = () => {
    const count = {
      player: 5,
      computer: 5,
    };

    return function start() {
      console.log('Старт игры');
      while (true) {
        const marbleCount = Math.floor(Number(prompt(`загадай число от 1-го
до количества имеющихся у тебя шариков (${count.player})`)));
        if (marbleCount > count.player || marbleCount < 1) continue;

        count.computer += marbleCount * compGuess(marbleCount);
        count.player -= marbleCount * compGuess(marbleCount);

        showResult(count);

        if (count.computer === 0 || count.player === 0) {
          alert(`Игра закончилась. ${count.computer === 0 ?
'Бот' : 'Игрок'} проиграл.`);
          break;
        }
      }
    };
  };

  window.marbl = game;
})();
