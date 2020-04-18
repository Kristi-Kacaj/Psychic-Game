let wins = 0;
let losses = 0;
let attempts = 10;
let lettersGuessed = [];
let ranLetter = ranLetter;
let letters = "abcdefghijklmnopqrstuvwxyz"

ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

function userGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);
}
