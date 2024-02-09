/* eslint-disable no-unused-vars */
// CONFIGURAR APP
const mensajeInicial = 'Adivina :P'
const INIT_SCORE = 20
const INIT_HIGH_SCORE = 0

// VARIABLES APP
let score, highScore, secretNumber

// SELECCIONAR ELEMENTOS DOMz
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// INICIALIZAR APP
initApp()

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
    secretNumberField.textContent = secretNumber
    messageField.textContent = 'Acertaste!! :)'
    document.body.style.backgroundColor = '#136713'
    checkButton.disabled = true
    if (score > highScore) {
      highScore = score
      localStorage.setItem('highScore', highScore)
      highScoreField.textContent = highScore
    }
  }
})

function initApp() {
  score = INIT_SCORE
  scoreField.textContent = score

  highScore = Number(localStorage.getItem('highScore')) || INIT_HIGH_SCORE //TODO añadir try-catch??
  highScoreField.textContent = highScore

  messageField.textContent = mensajeInicial

  document.body.style.backgroundColor = '#222'
  checkButton.disabled = false
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  secretNumberField.textContent = '?'
}

againButton.addEventListener('click', initApp)
