'use strict';

(() => {
//   const FIGURES_ENG = ['rock', 'scissors', 'paper'];
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
    return function start() {
      getRandomIncInclusive(FIGURES_RUS);
      console.log(getRandomIncInclusive(FIGURES_RUS));
      let user = prompt('Камень, ножницы, бумага?', '');
      if (user === null) {
        const vopros = confirm('Вы хотите завершить игру?');
        if (vopros !== true) {
          start();
        } else {
          alert(`Результат:
            Компьютер: ${result.computer},
            Пользователь: ${result.player}`);
          return;
        }
      }
      let userAnswer = user[0].toLowerCase();
      if (userAnswer === 'к') {
        user = 'камень';
      }
      if (userAnswer === 'н') {
        user = 'ножницы';
      }
      if (userAnswer === 'б') {
        user = 'бумага';
      }
      if (userAnswer !== 'к' && userAnswer !== 'н' && userAnswer !== 'б' || userAnswer === undefined) {
        userAnswer = 0;
        user = '0';
      }
      if (comp === user) {
        alert(`
    Компьютер: ${comp}
    Пользователь: ${user}
    Ничья`);
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
      }
      if (user === '0') {
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
  };
  window.rsp = game;
})();


