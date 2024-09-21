const userInput = document.querySelector('.guessField')
const submitButton = document.querySelector('.guessSubmit')
const prevGuesses = document.querySelector('.guesses')
const remainingChance = document.querySelector('.lastResult')
const starNewGame = document.querySelector('.newGame')
const displayResult = document.querySelector('.lowOrHi')
const resultDisplay = document.querySelector('.resultParas')

starNewGame.style.display = "none"

console.log(starNewGame)

let randomNumber = Math.floor(((Math.random() * 100) + 1))
//console.log(randomNumber);

const p = document.createElement('p')
let playGame =true;
let prevGuess = [];
let chances = 1;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let userGuess = parseInt(userInput.value);

    if(playGame){
        userGuessValidation(userGuess);    
    }
    
    console.log(randomNumber)
})

function userGuessValidation(guess){
    if(guess < 0){
        displayMessage("Please Enter a value greater than 0")
    }else if(guess > 100){
        displayMessage("Please Enter a value less than 100")
    }else if(isNaN(guess)){
        displayMessage("Please Enter a Number in between 1 to 100")
    }else{
        if(chances === 10){
            displayMessage("Your Game Is Over")
            endGame()
        }else{
            compareWithRandomNumber(guess);
            // console.log(userInput.value);
            displayCheck(guess);
            prevGuess.push(guess);
            
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
        endGame()
    }
}

function displayCheck(guess){
    userInput.value = '';
    chances++;
    console.log(chances);
    prevGuesses.innerHTML += `${guess}  `
}

function displayMessage(message){
    // p.innerHTML = `<h3>${message}</h3>`
    // resultDisplay.appendChild(p);
    displayResult.innerHTML = `<h3>${message}</h3>`
    console.log(p);

    console.log(typeof(chances));
    
    remainingChance.innerHTML = `${10 - chances}`;
}

function endGame(){
    userInput.setAttribute("disabled", "")
    starNewGame.style.display = "block"
    playGame = false

    starNewGame.addEventListener('click', (e) => {
        e.preventDefault();
        startGameAgain()
    })
}

function startGameAgain(){
    console.log("the game start again!")
    starNewGame.style.display = "none"

    let randomNumber = Math.floor(((Math.random() * 100) + 1))

    userInput.value = '';
    prevGuesses.innerHTML = "";
    userInput.removeAttribute("disabled", "")
    displayResult.innerHTML = ''
    chances = 1;
    prevGuess = [];
    remainingChance.innerHTML = "";
    playGame = true;
}