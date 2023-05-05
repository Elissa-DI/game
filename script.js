const playBoard = document.querySelector(".play-board")
const scoreElement = document.querySelector(".score")
const highScoreElement = document.querySelector(".high-score")
// const controls  = document.querySelectorAll

let foodX  ,foodY
let snakeX = 5, snakeY = 10  
let velocityX = 0 , velocityY = 0
let snakeBody = []
let gameOver = false
let setIntervalId;

let score = 0 ;
highScoreElement.innerText = ` High Score ${highScore}`
let highScore = localStorage.getItem("high-score") || 0

const changeFoodPosition = () => {
     foodX = Math.floor(Math.random() * 30) + 1
     foodY = Math.floor(Math.random() * 30) + 1
}

const handleGameOver = () => {
     clearInterval(setIntervalId)
     alert ("Game Over! Press OK ro replay...")
}

const changeDirection = (e) => {
   if (e.key === "ArrowUp" && velocityY !=1) {
     velocityX = 0
     velocityY = -1
   } else if ( e.key === "ArrowDown" && velocityY !=-1) {
     velocityX = 0
     velocityY = 1
   } else if ( e.key === "ArrowLeft" && velocityY !=1) {
     velocityX = -1
     velocityY = 0
       
   } else if ( e.key === "ArrowRight" && velocityY !=-1) {
     velocityX = 1
     velocityY = 0
   }

