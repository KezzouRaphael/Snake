import {onSnake,growSnake} from "./snake.js";
import {randomizeFruitPosition} from "./board.js"
let fruit = randomizeFruit();
const SNAKE_GROWTH = 1;
let score = 0;
const userScore = document.querySelector("#game-score");
export function update(){
  if(onSnake(fruit)){
    growSnake(SNAKE_GROWTH);
    fruit = randomizeFruit();
    score ++;
    userScore.textContent = score;
  }
}
export function draw(gameBoard){
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = fruit.y;
  foodElement.style.gridColumnStart = fruit.x;
  foodElement.classList.add("fruit");
  gameBoard.appendChild(foodElement);
}

function randomizeFruit(){
  let newFruitPosition;
  while(newFruitPosition == null || onSnake(newFruitPosition))
  {
    newFruitPosition = randomizeFruitPosition();
  }
  return newFruitPosition;
}