const userInput = document.querySelector('.guessField')
const submitButton = document.querySelector('.guessSubmit')
const prevGuesses = document.querySelector('.guesses')
const remainingChance = document.querySelector('.lastResult')
const starNewGame = document.querySelector('.newGame')
const displayResult = document.querySelector('.lowOrHi')
const resultDisplay = document.querySelector('.resultParas')

let randomNumber = Math.floor(((Math.random() * 100) + 1))
//console.log(randomNumber);

const p = document.createElement('p')
let playGame =true;
let prevGuess = [];
let chances = 10;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let userGuess = parseInt(userInput.value);

    if(playGame){
        userGuessValidation(userGuess);    
    }
    

})

function userGuessValidation(guess){
    if(guess < 0){
        displayMessage("Please Enter a value greater than 0")
    }else if(guess > 100){
        displayMessage("Please Enter a value less than 100")
    }else if(isNaN(guess)){
        displayMessage("Please Enter a Number in between 1 to 100")
    }else{
        if(chances === 0){
            displayMessage("Your Game Is Over")
        }else{
            compareWithRandomNumber(guess);
            // console.log(userInput.value);
            prevGuess.push(guess);
            userInput.value = '';
            chances--;
            console.log(chances);
        }
        
    }
}

function compareWithRandomNumber(guess){
    if(guess > randomNumber){
        displayMessage("You guessed High!")
    }else if(guess < randomNumber){
        displayMessage("you guessed Low!")
    }else if(guess === randomNumber){
        displayMessage("Congratulation! You guessed Right!")
    }
}

function displayMessage(message){
    p.innerHTML = `<h3>${message}</h3>`
    resultDisplay.appendChild(p);
    console.log(p);
}
