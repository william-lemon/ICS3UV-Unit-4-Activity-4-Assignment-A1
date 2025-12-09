/**
 * @autor William
 * @version 1.0.0
 * @date 2025-11-25
 * @fileoverview Simple guessing game without using while. Uses a for(;;) loop instead.
 */

console.log("Welcome to the Guessing Game!");
console.log("Guess a number between 1 and 10. Enter 0 to quit.");

// Generate random number from 1 to 10
const randomNumber: number = Math.floor(Math.random() * 10) + 1;

let guess: number = Number(prompt("Enter your guess: "));

// Loop forever until user guesses correctly or quits
for (; ;) {
  if (guess === randomNumber) {
    console.log("Congratulations! You guessed the correct number: " + randomNumber);
    break;
  }
  else if (guess === 0) {
    console.log("Game ended. You chose to quit.");
    break;
  }
  else {
    console.log("Try again.");
    guess = Number(prompt("Enter your guess: "));
  }
}

console.log("Done.");
