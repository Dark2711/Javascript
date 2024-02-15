let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess= 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('sirf number hi daliye')
    }else if(guess < 1){
        alert('1 se bda number daliye')
    }else if(guess > 100){
        alert('100 se chota number daliye')
    }else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            displayMessage(`Game khatam, Random number tha: ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Aap ne ekdum sahi guess kiya hai`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Too low`)
    }else if(guess >randomNumber){
        displayMessage(`Number is Too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Strat new Game</h2>`
    p.style.backgroundColor = 'Black'
    p.style.color = 'Orange'
    p.style.borderRadius = "5px"
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}