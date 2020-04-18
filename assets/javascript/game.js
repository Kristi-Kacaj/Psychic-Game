let wins = 0;
let losses = 0;
let guessesLeft = 9;
let lettersGuessed = [];
let ranLetter = 0;
let letters = "abcdefghijklmnopqrstuvwxyz"

ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

function userGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);
    reset 
};

document.onkeyup = function (event) {
    let playersGuess = event.key;

    if (playersGuess === ranLetter) {
        wins++;
        reset ()
        
    } else{  
        
    
        if (lettersGuessed.indexOf(playersGuess) >= 0) {
            console.log("guess a different letter!")
        } else {
            guessesLeft--;
            
        
            if (guessesLeft === 0) {
                losses++;
                reset ()
            }

            lettersGuessed.push(playersGuess);
            document.getElementById('playersGuess').innerHTML = lettersGuessed;
            console.log(lettersGuessed);
        }
    }
    
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    
};
function reset(){
    lettersGuessed = [];
    guessesLeft = 9;
    userGuess ();
    document.getElementById('playersGuess').innerHTML = lettersGuessed;
}