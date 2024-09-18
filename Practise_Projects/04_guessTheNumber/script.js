// Random Number
//10 Attempt
//Guess Remaining
//Low or High
//reset game
//start new game

// 1. Generate Random Number
// 2. Take Input from User
// 3. Validating Input
// 4. Comparing Random Number and User Input
// 5. Chances Counter
// 5. Display the result
// 6. Remaining chances
// 7. End The Game
// 8. Restart The Game

const randomNumber = Math.floor((Math.random() * 100) + 1);
const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');
let counter = 10;

const previousGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const displayField = document.querySelector('.resultParas');
let gamePlay = true;

// let pushNumber = []

const validity = document.querySelector('.validity')


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(userInput.value);
    const guessNumber = parseInt(userInput.value);
    //console.log(guessNumber);

    if(gamePlay){
        validateGuessNumber(guessNumber);
    }
  
    userInput.value = '';

    remainingGuesses.innerHTML = counter;

    endGame(counter);
    
    console.log(randomNumber)
    
})


function validateGuessNumber(number){
    if(number > 100 || number < 0 || isNaN(number)){
        validity.style.display = "block"
    }else{
        compareGuessNumber(number)
        prevGuesses(number)
        // displayField.removeChild(p);
        if(validity.style.display === "block"){
            validity.style.display = "none"
        }
    }
}

function compareGuessNumber(number){
    if (number > randomNumber){
        // console.log(`Random Number: ${randomNumber}`)
        counter--;
        // console.log("You guessed too high!")
        lowOrHigh.innerHTML = "You guessed too HIGH!"
    }else if(number < randomNumber){
        // console.log(`Random Number: ${randomNumber}`)
        counter--;
        // console.log("You guessed too low!")
        lowOrHigh.innerHTML = "You guessed too LOW!"
    }else if(number === randomNumber){
        // console.log(`Random Number: ${randomNumber}`)
        lowOrHigh.innerHTML = "Congratulation you guessed RIGHT!"
        endGame(0);
    }
}

function prevGuesses(number){
    // pushNumber.push(number)
    // pushNumber.forEach((numBer) => {
    //     const num = document.createTextNode(`${numBer}`)
    //     previousGuesses.appendChild(num)
    // })
    const num = document.createTextNode(`${number}, `)
    previousGuesses.appendChild(num)
    
}

function endGame(number){
    console.log(number);
    if(number === 0){
        gamePlay = false;

        userInput.setAttribute("disabled", "")
        
        // displayField.style.display = "none"
        //startGame()
    }
}
