// 'use strict';

// (() => {
//   const FIGURES_ENG = ['rock', 'scissors', 'paper'];
//   const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
//   let comp;
//   const getRandomIncInclusive = (arr) => {
//     comp = arr[Math.floor(Math.random() * arr.length)];
//     return comp;
//   };
//   const game = (language) => {
//     const result = {
//       player: 0,
//       computer: 0,
//     };
//     if (language === 'EN' || language === 'ENG') {
//       return function start() {
//         getRandomIncInclusive(FIGURES_ENG);
//         console.log(getRandomIncInclusive(FIGURES_ENG));
//         const user = prompt('Rock, scissors, paper?', '');
//         const userRock = ['rock', 'Rock', 'ROCK', 'Roc', 'roc', 'ROC', 'R', 'r'];
//         const userScissors = ['scissors', 'Scissors', 'SCISSORS', 'Scis', 'scis', 'SCIS', 'S', 's'];
//         const userPaper = ['paper', 'Paper', 'PAPER', 'Pap', 'pap', 'PAP', 'P', 'p'];
//         if (user === null) {
//           const faq = confirm('Are you sure you want to end the game?');
//           if (faq) {
//             alert(`Result:
//                 Computer: ${result.computer},
//                 User: ${result.player}`);
//             return;
//           } else {
//             start();
//           }
//         }
//         if (comp === 'rock' && userScissors.includes(user) === true) {
//           result.computer += 1;
//           alert(`
//                 Сomputer: ${comp}
//                 User: scissors
//                 Сomputer won`);
//           start();
//         }
//         if (comp === 'scissors' && userPaper.includes(user) === true) {
//           result.computer += 1;
//           alert(`
//                 Сomputer: ${comp}
//                 User: paper
//                 Сomputer won`);
//           start();
//         }
//         if (comp === 'paper' && userRock.includes(user) === true) {
//           result.computer += 1;
//           alert(`
//                 Computer: ${comp}
//                 User: rock
//                 Сomputer won`);
//           start();
//         }
//         if (comp === 'scissors' && userRock.includes(user) === true) {
//           result.player += 1;
//           alert(`
//                 Computer: ${comp}
//                 User: rock
//                 You won`);
//           start();
//         }
//         if (comp === 'paper' && userScissors.includes(user) === true) {
//           result.player += 1;
//           alert(`
//                 Computer: ${comp}
//                 User: scissors
//                 You won`);
//           start();
//         }
//         if (comp === 'rock' && userPaper.includes(user) === true) {
//           result.player += 1;
//           alert(`
//                 Computer: ${comp}
//                 User: paper
//                 You won`);
//           start();
//         }
//         if (comp === 'rock' && userRock.includes(user) === true) {
//           alert(`
//                 Computer: ${comp},
//                 User: rock
//                 Draw`);
//           start();
//         }
//         if (comp === 'paper' && userPaper.includes(user) === true) {
//           alert(`
//                 Computer: ${comp},
//                 User: paper
//                 Draw`);
//           start();
//         }
//         if (comp === 'scissors' && userScissors.includes(user) === true) {
//           alert(`
//                 Computer: ${comp},
//                 User: scissors
//                 Draw`);
//           start();
//         }
//         if (userRock.includes('user') === false || userPaper.includes('user') === false || userScissors.includes('user') === false) {
//           start();
//         }
//       };
//     } else {
//       return function start() {
//         getRandomIncInclusive(FIGURES_RUS);
//         console.log(getRandomIncInclusive(FIGURES_RUS));
//         const user = prompt('Камень, ножницы, бумага?', '');
//         const userNojnicy = ['ножницы', 'Ножницы', 'НОЖНИЦЫ', 'Нож', 'нож', 'НОЖ', 'Н', 'н'];
//         const userBumaga = ['бумага', 'Бумага', 'БУМАГА', 'Бум', 'бум', 'БУМ', 'Б', 'б'];
//         const userKamen = ['камень', 'Камень', 'КАМЕНЬ', 'Кам', 'кам', 'КАМ', 'К', 'к'];
//         if (user === null) {
//           const faq = confirm('Вы точно хотите завершить игру?');
//           if (faq === false) {
//             start();
//           }
//           if (faq === true) {
//             alert(`Результат:
//                 Компьютер: ${result.computer},
//                 Игрок: ${result.player}`);
//             return;
//           }
//         }
//         if (comp === 'камень' && userNojnicy.includes(user) === true) {
//           result.computer += 1;
//           alert(`
//         Компьютер: ${comp}
//         Игрок: ножницы
//         Компьютер выиграл`);
//           start();
//         }
//         if (comp === 'ножницы' && userBumaga.includes(user) === true) {
//           result.computer += 1;
//           alert(`
//         Компьютер: ${comp}
//         Игрок: бумага
//         Компьютер выиграл`);
//           start();
//         }
//         if (comp === 'бумага' && userKamen.includes(user) === true) {
//           result.computer += 1;
//           alert(`
//         Компьютер: ${comp}
//         Игрок: камень
//         Компьютер выиграл`);
//           start();
//         }
//         if (comp === 'ножницы' && userKamen.includes(user) === true) {
//           result.player += 1;
//           alert(`
//         Компьютер: ${comp}
//         Игрок: камень
//         Вы выиграли`);
//           start();
//         }
//         if (comp === 'бумага' && userNojnicy.includes(user) === true) {
//           result.player += 1;
//           alert(`
//         Компьютер: ${comp},
//         Игрок: ножницы
//         Вы выиграли`);
//           start();
//         }
//         if (comp === 'камень' && userBumaga.includes(user) === true) {
//           result.player += 1;
//           alert(`
//         Компьютер: ${comp}
//         Игрок: бумага
//         Вы выиграли`);
//           start();
//         }
//         if (comp === 'камень' && userKamen.includes(user) === true) {
//           alert(`
//         Компьютер: ${comp},
//         Игрок: камень
//         Ничья`);
//           start();
//         }
//         if (comp === 'бумага' && userBumaga.includes(user) === true) {
//           alert(`
//         Компьютер: ${comp},
//         Игрок: бумага
//         Ничья`);
//           start();
//         }
//         if (comp === 'ножницы' && userNojnicy.includes(user) === true) {
//           alert(`
//         Компьютер: ${comp},
//         Игрок: ножницы
//         Ничья`);
//           start();
//         }
//         if (userNojnicy.includes('user') === false || userBumaga.includes('user') === false || userKamen.includes('user') === false) {
//           start();
//         }
//       };
//     }
//   };

//   window.rsp = game;
// })();


