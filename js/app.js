"use strict";

let correctAnswer = 0;

let yourName = prompt("What is your name?");
console.log(yourName);
alert(yourName + ", Let us play a game!");

function name() {
  let name = prompt("Is my name Miguel?").toLowerCase();
  if (name === "yes" || name === "y") {
    // console.log('Yes, yes it is.!');
    alert("Yes, yes it is.");
    correctAnswer++;
  } else if (name === "no" || name === "n") {
    // console.log('Sorry your're wrong.');
    alert("Sorry, you're wrong");
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert("You need to answer with a 'yes' or a 'no'");
  }
}

function likeSun() {
  let likeSun = prompt("Do I like the Sun?").toLowerCase();
  if (likeSun === "yes" || ownDogs === "y") {
    // console.log('Yes I do like the sun');
    alert("You are correct!");
    correctAnswer++;
  } else if (likeSun === "no" || likeSun === "n") {
    // console.log('Sorry, you are wrong.');
    alert("incorrect.");
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert("You need to answer with a 'yes' or a 'no'");
  }
}

function livesInSeattle() {
  let livesInSeattle = prompt("Do I live in Seattle?").toLowerCase();
  if (livesInSeattle === "yes" || livesInSeattle === "y") {
    // console.log('Yes, I do live in Seattle');
    alert("Yes, I do live in Seattle");
    correctAnswer++;
  } else {
    // console.log('Wrong');
    alert("I do live in Seattle");
  }
}

function likeScience() {
  let likeScience = prompt("Does Miguel like Neuroscience?").toLowerCase();
  if (likeScience === "yes" || likeScience === "y") {
    // console.log('That he does!');
    alert("That he does!");
    correctAnswer++;
  } else if (likeScience === "no" || likeScience === "n") {
    // console.log('Wrong!');
    alert("You are wrong!");
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert("You need to answer with a 'yes' or a 'no'");
  }
}

function favFood() {
  let favFood = prompt("Does Miguel like Food?").toLowerCase();
  if (favFood === "yes" || favFood === "y") {
    // console.log('he does like Food');
    alert("Wow your a genius!");
    correctAnswer++;
  } else if (favFood === "no" || favFood === "n") {
    // console.log('No');
    alert("Interesting guess, but wrong.");
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert("You need to answer with a 'yes' or a 'no'");
  }
}
favFood();
let questions = [
  "Is my name Miguel?",
  "Do I like the Sun?",
  "Do I live in Seattle?",
  "Does Miguel like Neuroscience?",
  "Does Miguel like Food?",
];
let answers = ["y", "y", "y", "y", "y"];
let outcome = [
  "You got it correct!",
  "Nope, you are wrong!",
  "Please type yes or no",
];

function yesOrNo() {
  for (let i = 0; i < 4; i++) {
    let input = prompt(questions[i]);
    let firstLetter = input.charAt(0);
    if (firstLetter === answers[i]) {
      alert(outcome[0]);
      correctAnswer++;
    } else if (firstLetter !== "y" && firstLetter !== "n") {
      alert(outcome[2]);
    } else {
      alert(outcome[1]);
    }
  }
}

yesOrNo();

function ageGuess() {
  let attemptsRemaining = 4;

  while (attemptsRemaining >= 1) {
    attemptsRemaining--;
    let ageGuess = prompt("Guess my age!");
    ageGuess = parseInt(ageGuess);
    if (ageGuess === 23) {
      // console.log('You guessed it correctly! I am 21!');
      alert("You guessed it correctly! I am 23!");
      correctAnswer++;
      break;
    } else if (ageGuess > 21) {
      // console.log(`Too high! You have ${attemptsRemaining} attempts remaining!`);
      alert(`Too high! You have ${attemptsRemaining} attempts remaining!`);
    } else if (ageGuess < 21 && ageGuess > 0) {
      // console.log(`Too low! You have ${attemptsRemaining} attempts remaining!`);
      alert(`Too low! You have ${attemptsRemaining} attempts remaining!`);
    } else {
      // console.log(`invaild input! You have ${attemptsRemaining} attempts remaining!`);
      alert(`invaild input! You have ${attemptsRemaining} attempts remaining!`);
    }
    if (attemptsRemaining === 0) {
      // console.log('You are out of attempts! The correct answer was 21!');
      alert("You are out of attempts! The correct answer was 23!");
    }
  }
}
ageGuess();

function favStatePark() {
  let favStatePark = ["Yosemite", "Rainier", "Death Valley"];
  let guessesRemaining = 6;
  let guessIsCorrect = false;
  while (guessesRemaining && !guessIsCorrect) {
    guessesRemaining--;
    let favStatePark = prompt(
      "Can you guess one of my favorite state parks?"
    ).toLowerCase();
    for (let i = 0; i < favStatePark.length; i++) {
      if (favStatePark === favStatePark[i]) {
        // console.log(favStatePark + ' is one of my favorite state parks!');
        alert(stateparkGuess + " is one of my favorite state parks!");
        correctAnswer++;
        guessIsCorrect = true;
        break;
      } else if (i === favStatePark.length - 1) {
        alert(
          stateparkGuess +
            ` is not one of my favorite state parks. You have ${guessesRemaining} guesses remaining!`
        );
      }
      if (guessIsCorrect === true) {
        break;
      }
    }
  }
}
favStatePark();

// console.log(`You scored ${correctAnswer} out of 7 questions correctly.`);
alert(`You scored ${correctAnswer} out of 7 questions correctly.`);
// console.log
