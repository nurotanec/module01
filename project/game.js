'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const oddOrEven = (count, guess = getRandomIntInclusive(0, 1)) => {
    return count % 2 === guess ? 1 : -1;
  };

  const showResult = (count) => {
    console.log(`Количество шариков:
Игрок: ${count.player}
Бот: ${count.computer}`);
  };

  const getHumanInput = (count) => {
    return Math.floor(Number(prompt(`загадай число от 1 до ${count.player}`)));
  };

  const getCompInput = (count) => {
    return getRandomIntInclusive(1, count.computer);
  };

  const game = () => {
    const count = {
      player: 5,
      computer: 5,
    };
    const human = {
      turn: true,
    };

    const recalculate = (marbleCount, r) => {
      const coef = oddOrEven(marbleCount, r);
      count.computer += marbleCount * coef;
      count.player -= marbleCount * coef;
    };

    return function start() {
      console.log('Старт игры');
      while (true) {
        if (human.turn) {
          const marbleCount = getHumanInput(count);
          if (marbleCount > count.player || marbleCount < 1) continue;
          recalculate(marbleCount);
        } else {
          const marbleCount = getCompInput(count);
          if (confirm('Число четное?')) {
            recalculate(marbleCount, 0);
          } else {
            alert('Значит нечетное');
            recalculate(marbleCount, 1);
          }
        }

        showResult(count);

        if (count.computer === 0 || count.player === 0) {
          alert(`Игра закончилась. ${count.computer === 0 ?
'Бот' : 'Игрок'} проиграл.`);
          break;
        }

        human.turn = !human.turn;
      }
    };
  };

  window.marbl = game;
})();
