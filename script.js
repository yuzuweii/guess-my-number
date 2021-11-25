"use strict";

// Implementing game logic

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
// A state variable
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener(
  "click",
  function () {
    const guess = Number(document.querySelector(".guess").value);
    // If there is no number input.
    if (!guess) {
      displayMessage("🚫 No number!");
    } // When player wins
    else if (guess === secretNumber) {
      displayMessage("🎉 Correct number!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too Low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").textContent = 0;
      }
    }
    // When guess is too high
    //   else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "📈 Too high!";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "💥 You lost the game!";
    //       document.querySelector(".score").textContent = 0;
    //     }
  } // When guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "💥 You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
);

// Add an event listener to the Again! button
document.querySelector(".again").addEventListener("click", function () {
  // restore initial values of score, secretNumber variables.
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  // restore initial conditions of the message, number, score and guess input field.
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
