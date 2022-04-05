//IMPORTS
import {update as snakeUpdate, draw as snakeDraw,SNAKE_SPEED,getSnakeHead,snakeTouched} from "./snake.js";
import {update as fruitUpdate, draw as fruitDraw} from "./fruits.js";
import {outOfBounds} from "./board.js"
//DOM
const gameBoard = document.querySelector("#game-board");
const userScore = document.querySelector("#game-score");
let bestScoreInput = document.querySelector("#game-best-score")
//GLOBALS
let lastRenderTime = 0;
let gameOver = false;
let bestScore;
window.onload = ()=>{
  bestScore = localStorage.getItem("bestScore");
  if(bestScore)
    bestScoreInput.textContent = bestScore;
}
function main(timer){ 
  if(gameOver){
    if(confirm(`You lost!\nYour score : ${userScore.textContent} .\nRestart?`)){
      window.location = "/";
    }
    localStorage.setItem("bestScore", userScore.textContent);
    return
  }
  window.requestAnimationFrame(main);
  let secondsPassed=(timer - lastRenderTime)/1000;
  if( secondsPassed < 1 /SNAKE_SPEED) return;
  lastRenderTime = timer;
  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  snakeUpdate();
  fruitUpdate();
  gameOverUpdate();
}

function draw() {
  gameBoard.innerHTML= "";
  snakeDraw(gameBoard);
  fruitDraw(gameBoard);
}

function gameOverUpdate() {
  gameOver = outOfBounds(getSnakeHead()) || snakeTouched();
}