let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')


let prevGuess=[]
let numGuess=1

let playgame=true//ye hota hia play games ch hmesha like jdo coins na hon etc etc

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //value 1 to 100 de vich hai k na
    if(isNaN(guess))
    {alert('plese eneter a valid number')
    }else if(guess>100){
        alert('plese eneter a valid number')
    }else if(guess<1){
        alert('plese eneter a valid number')
    }else{
        prevGuess.push(guess)
        if(numGuess>10){
            displayGuess(guess)
            displayMessage(`Game Over Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    //ahi vo value hai jo vo random k msg qual hai
    if(guess===randomNumber){
        displayMessage(`You Guessed it right bro`)
        endGame()
    }else if (guess<randomNumber)
    {
        displayMessage(`Number is tooo low`)
    }else if (guess>randomNumber){
        displayMessage(`Number is tooo high`)
    }
}

function displayGuess(guess){
    // display krega , array nu updae krega
    userInput.value=''
    guessSlot.innerHTML+=` ${guess}`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    //low high nu msg paas krega
    lowOrHi.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">start new game</h2>`
    startOver.appendChild(p)
    playgame=false
    newGame();
}

function newGame(){
    //
   const newGameButton= document.querySelector('#newGame')
   newGameButton.addEventListener('click',(e)=>{
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playgame=true;

   })
}

