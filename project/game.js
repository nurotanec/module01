'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const TERMS_RUS = ['Вы', 'Компьютер', 'Результат', 'Игрок', 'Еще',
    'Хотите выйти'];
  const RESULTS_RUS = ['Ничья', 'Вы выиграли', 'Вы проиграли'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    return lang[getRandomIntInclusive(0, 2)];
  };

  const compare = (lang, human, comp) => {
    if (human[0].toLowerCase() === comp[0]) {
      return [0, ''];
    } else if (human.toLowerCase()[0] === lang[0][0]) {
      if (comp[0] === lang[1][0]) {
        return [1, lang[0]];
      } else if (comp[0] === lang[2][0]) {
        return [-1, lang[0]];
      }
    } else if (human.toLowerCase()[0] === lang[1][0]) {
      if (comp[0] === lang[0][0]) {
        return [-1, lang[1]];
      } else if (comp[0] === lang[2][0]) {
        return [1, lang[1]];
      }
    } else if (human.toLowerCase()[0] === lang[2][0]) {
      if (comp[0] === lang[0][0]) {
        return [1, lang[2]];
      } else if (comp[0] === lang[1][0]) {
        return [-1, lang[2]];
      }
    } else {
      return [null, null];
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    // Language processing
    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;
    const text = language === 'EN' || language === 'ENG' ?
    'Rock, Paper, Scissors?' : 'Камень, ножницы, бумага?';
    const results = language === 'EN' || language === 'ENG' ?
    RESULTS_ENG : RESULTS_RUS;
    const terms = language === 'EN' || language === 'ENG' ?
    TERMS_ENG : TERMS_RUS;

    return function start() {
      while (true) {
        // berem otvety
        const human = prompt(text);
        if (human === null) {
          if (confirm(`${terms[5]}?`)) {
            alert(`
              ${terms[2]}:
              ${terms[1]}: ${result.computer},
              ${terms[0]}: ${result.player}
            `);
            break;
          } else {
            continue;
          }
        }
        const comp = getFigure(lang);

        // sravnivaem ih i daem output
        const [outcome, humanChoice] = compare(lang, human, comp);

        switch (outcome) {
          case 0:
            alert(`
              ${terms[1]}: ${comp}
              ${terms[0]}: ${comp}
              ${results[0]}
            `);
            continue;
          case 1:
            alert(`
              ${terms[1]}: ${comp}
              ${terms[0]}: ${humanChoice}
              ${results[1]}
            `);
            result.player += 1;
            return true;
          case -1:
            alert(`
              ${terms[1]}: ${comp}
              ${terms[0]}: ${humanChoice}
              ${results[2]}
            `);
            result.computer += 1;
            return false;
          default:
            continue;
        }
      }
    };
  };

  window.rps = game;
})();

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
    const ingame = {
      humanTurn: true,
      notStarted: true,
    };

    const recalculate = (marbleCount, r) => {
      const coef = oddOrEven(marbleCount, r);
      count.computer += marbleCount * coef;
      count.player -= marbleCount * coef;
    };

    return function start() {
      console.log('Старт игры');
      while (true) {
        if (ingame.notStarted) {
          const startGame = window.rps();
          ingame.humanTurn = startGame();
          ingame.notStarted = false;
        }

        if (ingame.humanTurn) {
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

        if (count.computer <= 0 || count.player <= 0) {
          alert(`Игра закончилась. ${count.computer <= 0 ?
'Бот' : 'Игрок'} проиграл.`);
          if (confirm('Хотите сыграть еще?')) {
            count.computer = 5;
            count.player = 5;
            ingame.notStarted = true;
            continue;
          }

          break;
        }

        ingame.humanTurn = !ingame.humanTurn;
      }
    };
  };

  window.marbl = game;
})();
