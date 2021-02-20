'use strict';

// --- CODING CHALLENGE 1 ---
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     // Update answers
//     if ([0, 1, 2, 3].includes(answer)) {
//       this.answers[answer]++;
//       this.displayResults();
//     } else {
//       alert('Not a valid option, please try again!');
//     }
//   },
//   displayResults(type) {
//     if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     } else {
//       console.log(this.answers);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // Bonus:

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] }, 'array');

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');

// --- CODING CHALLENGE 2 ---

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
