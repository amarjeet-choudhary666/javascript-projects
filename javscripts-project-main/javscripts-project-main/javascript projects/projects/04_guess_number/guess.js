let randomNumber = parseInt((Math.random() * 100 + 1));

const userInput = document.querySelector('#guessFeild');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startnewgamebtn = document.querySelector('.startover')
const startOver = document.querySelector('.resultsParas');

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

const p = document.querySelector('.startover');

if (guess) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateNumber(guess);                            
    })
}

function validateNumber(guess){
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }else if (guess < 1) {
        alert('please enter a valid number')
    }else if(guess > 100){
        alert('please enter a number less than 100')
    }else{
        prevGuess.push(guess);
        if (numGuesses === 11 - 1) {
            displayGuess(guess)
            displayMessage(`Game over: your previous random number is ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
    displayGuess(`you guessed it right`);
    endGame();
    }else if (guess < randomNumber) {
    displayMessage(`your guess number ${guess} is low`);
    }else if (guess > randomNumber) {
        displayMessage(`your guess number ${guess} is very high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h4 id="newGame">Start new Game</h4>`;
    startOver.appendChild(p)

    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        lowOrHi.innerHTML = ''
        startOver.removeChild(p)
        playGame = true
        
    })
}




