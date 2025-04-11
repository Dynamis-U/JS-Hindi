const randomnumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSLot = document.querySelector('.guesses');
const  remaining = document.querySelector('.lastresult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        console.log(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number greater than 0 and less than 101');
    }else if(guess > 100){
        alert('Please enter a number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomnumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomnumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if( guess < randomnumber){
        displayMessage(`Number is low`);
    }else if(guess > randomnumber){
        displayMessage(`Number is high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSLot.innerHTML += `${guess}   `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''; //reset input value
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click', function(e){
            randomnumber = parseInt(Math.random()*100 + 1);
            prevGuess = [];
            newGuess = 1;
            guessSLot.innerHTML = '';
            remaining.innerHTML = `${11 - numGuess}`;
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);

            playGame = true;
        });
}

