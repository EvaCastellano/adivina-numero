// CONFIGURAR APP
const mensajeInicial = 'Adivina >:('
let score = 21
let highScore = 1
const secretNumber = Math.trunc(Math.random() * 20 + 1)


// SELECCIONAR ELEMENTOS DOM
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')


// INICIALIZAR APP
messageField.textContent = mensajeInicial
scoreField.textContent = score
highScoreField.textContent = highScore
secretNumberField.textContent = secretNumber


// FUNCIONALIDAD APP
checkButton.addEventListener('click', () => {
    const guessNumber = Number(guessNumberField.value)
    if (guessNumber > secretNumber) {
        messageField.textContent = 'El número es menor'
        score--
        scoreField.textContent = score
    } else if (guessNumber < secretNumber) {
        messageField.textContent = 'El número es mayor'
        score--
    } else {
        messageField.textContent='Acertaste!! :)'
    } 
})