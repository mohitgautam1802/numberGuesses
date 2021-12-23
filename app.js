//Game Value
let min = 1,
max = 10,
winningNum = getRandomNum(min, max),
guessesLeft = 3;

//UI Element
const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
//Bhai khud debug kara hai
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-value'),
guessInput = document.querySelector('#guess-input')
message = document.querySelector('.message')

//Assign UI min and max
minNum.textContent = min 
maxNum.textContent = max

//Play again event listener
game.addEventListener('mousedown', function(e){
    //here if we use click then directly page si going to reload winning giving the winning sign with mousedown we get one extra sign
    if(e.target.className === 'play-again'){
        window.location.reload()
        //this is window object which helps in reload the page
    }
})

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess =  parseInt(guessInput.value)
    //here parse int is used letters written in console were string and we need numbers on the console

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a numnber between ${min} and ${max}`, 'red')
    }

    //Check if won 
    if(guess === winningNum){
        

        gameOver(true, `${winningNum} is correct, You Won`)
        // //Disable input
        // guessInput.disabled = true
        // //Change border color 
        // guessInput.style.borderColor = 'green'
        // //Set message
        // setMessage(`${winningNum} is correct!, YOU WIN! `, 'green')
        // //here set message can be applied to both the statement 1. check the validation and 2. check is we won

    }else{
        ///Wrong Number
        guessesLeft -= 1

        if(guessesLeft === 0){
            //GAme over Lost

            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)

        //      //Disable input
        // guessInput.disabled = true
        // //Change border color 
        // guessInput.style.borderColor = 'red'
        // //Set message
        // setMessage(`Game is over, you lost. The correct number was ${winningNum} `, 'red')
        // //here set message can be applied to both the statement 1. check the validation and 2. check is we won
        }
        else{
            //Game continuous answer wrrong

            //Change border color 
            guessInput.style.borderColor = 'red'

            //Clear Input
            guessInput.value = ''
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left `, 'red')
        }

    }
})

//Game Over 
function gameOver(won, msg){
    let color
    won === true ? color = 'green' : color = 'red'

     //Disable input
     guessInput.disabled = true
     //Change border color 
     guessInput.style.borderColor = color
     //Set text color
     message.style.color = color
     //Set message
     setMessage(msg)
     //here set message can be applied to both the statement 1. check the validation and 2. check is we won

     //when won play again
     guessBtn.value = 'Play Again'
     guessBtn.className += 'play-again'
}
//Get Winning Number
function getRandomNum(min, max){
   return Math.floor(Math.random()*(max-min+1)+min)
}

// Set message
function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg
}



