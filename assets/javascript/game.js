let wins = 0;
let losses = 0;
let guessesLeft = 9;
let lettersGuessed = [];
let ranLetter = '';
let letters = "abcdefghijklmnopqrstuvwxyz"

ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

function userGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);
};

document.onkeyup = function (event) {
    let playersGuess = event.key;

    if (playersGuess === ranLetter) {
        wins++;
        guessesLeft = 9;
        lettersGuessed = [];
    } 

    userGuess ();
    if (playerGuess !== ranLetter) {
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        losses++;
        lettersGuessed = [];
        guessesLeft = 9;
    }

    if (lettersGuessed.indexOf(playerGuess) >= 0) {

    } else {
        lettersGuessed.push(playerGuess);
        document.getElementById('playerGuess').innerHTML = lettersGuessed;
        console.log(lettersGuessed);
    }
    
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;

};