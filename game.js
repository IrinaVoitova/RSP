'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  let comp;
  const getRandomIncInclusive = (arr) => {
    comp = arr[Math.floor(Math.random() * arr.length)];
    return comp;
  };
  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    if (language === 'EN' || language === 'ENG') {
      return function start() {
        getRandomIncInclusive(FIGURES_ENG);
        console.log(getRandomIncInclusive(FIGURES_ENG));
        let user = prompt('Rock, scissors, paper?', '');

        const foo = () => {
          if (comp === user) {
            alert(`
            Computer: ${comp}
            User: ${user}
            Draw`);
            start();
          }
          if (user === ' ') {
            start();
          }
          if (comp === FIGURES_ENG[0] && user === FIGURES_ENG[2] ||
      comp === FIGURES_ENG[1] && user === FIGURES_ENG[0] ||
      comp === FIGURES_ENG[2] && user === FIGURES_ENG[1]) {
            result.player += 1;
            alert(`
            Computer: ${comp}
            User: ${user}
            You won`);
            start();
          } else {
            result.computer += 1;
            alert(`
            Computer: ${comp}
            User: ${user}
            Сomputer won`);
            start();
          }
        };
        const foo2 = () => {
          const question = confirm('Are you sure you want to end the game?');
          if (question !== true) {
            start();
          } else {
            alert(`Result:
            Computer: ${result.computer},
            User: ${result.player}`);
            return;
          }
        };
        if (user === null) {
          foo2();
        }
        const userAnswer = user.toLowerCase();
        if (userAnswer === '') {
          user = ' ';
          foo();
        }
        const check = userAnswer[0];
        if (check === 'r') {
          user = 'rock';
          foo();
        }
        if (check === 's') {
          user = 'scissors';
          foo();
        }
        if (check === 'p') {
          user = 'paper';
          foo();
        } else {
          user = ' ';
          foo();
        }
      };
    } else {
      return function start() {
        getRandomIncInclusive(FIGURES_RUS);
        console.log(getRandomIncInclusive(FIGURES_RUS));
        let user = prompt('Камень, ножницы, бумага?', '');

        const foo = () => {
          if (comp === user) {
            alert(`
    Компьютер: ${comp}
    Пользователь: ${user}
    Ничья`);
            start();
          }
          if (user === ' ') {
            start();
          }
          if (comp === FIGURES_RUS[0] && user === FIGURES_RUS[2] ||
    comp === FIGURES_RUS[1] && user === FIGURES_RUS[0] ||
    comp === FIGURES_RUS[2] && user === FIGURES_RUS[1]) {
            result.player += 1;
            alert(`
    Компьютер: ${comp}
    Пользователь: ${user}
    Вы Выиграли`);
            start();
          } else {
            result.computer += 1;
            alert(`
    Компьютер: ${comp}
    Пользователь: ${user}
    Компьютер выиграл`);
            start();
          }
        };
        const foo2 = () => {
          const question = confirm('Вы хотите завершить игру?');
          if (question !== true) {
            start();
          } else {
            alert(`Результат:
            Компьютер: ${result.computer},
            Пользователь: ${result.player}`);
            return;
          }
        };
        if (user === null) {
          foo2();
        }
        const userAnswer = user.toLowerCase();
        if (userAnswer === '') {
          user = ' ';
          foo();
        }
        const check = userAnswer[0];
        if (check === 'к') {
          user = 'камень';
          foo();
        }
        if (check === 'н') {
          user = 'ножницы';
          foo();
        }
        if (check === 'б') {
          user = 'бумага';
          foo();
        } else {
          user = ' ';
          foo();
        }
      };
    }
  };
  window.rsp = game;
})();
