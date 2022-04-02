'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const TERMS_ENG = ['You', 'Computer', 'Result', 'Player', 'Play again',
    'End the game'];
  const TERMS_RUS = ['Вы', 'Компьютер', 'Результат', 'Игрок', 'Еще',
    'Хотите выйти'];
  const RESULTS_ENG = ['Draw', 'You won!', 'You lost!'];
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
            break;
          case 1:
            alert(`
              ${terms[1]}: ${comp}
              ${terms[0]}: ${humanChoice}
              ${results[1]}
            `);
            result.player += 1;
            break;
          case -1:
            alert(`
              ${terms[1]}: ${comp}
              ${terms[0]}: ${humanChoice}
              ${results[2]}
            `);
            result.computer += 1;
            break;
          default:
            continue;
        }

        if (!confirm(`${terms[4]}?`)) {
          alert(`
            ${terms[2]}:
            ${terms[1]}: ${result.computer},
            ${terms[3]}: ${result.player}
          `);
          break;
        }
      }
    };
  };

  window.RPS = game;
})();
