'use strict';

alert('Hello there!');

let yourName = prompt('My name is Miguel, what is yours'); console.log(yourName);

function question1() {
  let question1= prompt(yourName + ' I have a couple yes and no question for you. Would you like to answer?').toLocaleLowerCase();
  if (question1 === 'yes' || question1 === 'y') {
    alert('Awesome let\'s proceed.');
  } else if (question1 === 'no' || question1 === 'n') {
    alert('Well that sucks on to the next question.');
  }
}
question1();

function question2() {
  let question2= prompt('Does the developer Miguel like Science');
  if (question2 === 'yes' || question2 === 'y') {
    alert('You are correct.');
  } else if (question2 === 'no' || question2 === 'n') {
    alert('He does.');
  }
}
question2();

function question3() {
  let question3 = prompt('Does Miguel like the Sun?');
  if (question3 === 'yes' || question3 === 'y') {
    alert('You are correct');
  } else if (question3 === 'no' || question3 === 'n') {
    alert('He does');
  }
}
question3();

function one() {
  let question4 = prompt('Do I like chocolate?');
  if (question4 === 'yes' || question4 === 'y') {
    alert('Correct.');
  } else if (question4 === 'no' || question4 === 'n') {
    alert('wrong! Next Question');
  }
}
one();

function corn() {
  let question5 = prompt('Did you like this quiz');
  if (question5 === 'yes' || question5 === 'y') {
    alert('Thanks much appreciated');
  } else if (question5 === 'no' || question5 === 'n') {
    alert('Well I\'ll try better next time');
  }
}
corn();

// // alert("You have 4 guesses. Pick a number 1-10");

// let guess = 4;

// for(let i = guess; i>=0; i--) {
// let kanye = prompt('Let\'s play a game. Pick a number from 1-10');
// if (kanye === '4') {
//   alert('You are correct');
// }
// break;
// }

// alert('Thank\'s for your time ' + yourName +'!');
// console.log(yourName);
