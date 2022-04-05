let inputDirection = {x:0,y:0};
let lastInputDirection = {x:0,y:0};
const gameBoard = document.querySelector("#game-board");
export let currentDirection = "left";
export let previousDirection;
gameBoard.addEventListener("keydown",e=>{
  e.preventDefault();
  switch(e.key){
    case "ArrowUp":
      if(lastInputDirection.y !== 0) break;
      inputDirection = {x:0,y:-1};
      previousDirection = currentDirection;
      currentDirection ="top";
      break;
    case "ArrowDown":
      if(lastInputDirection.y !== 0) break;
      inputDirection = {x:0,y:1}; 
      previousDirection = currentDirection;
      currentDirection ="down";
      break;
    case "ArrowLeft":
      if(lastInputDirection.x !== 0) break;
      inputDirection = {x:-1,y:0}; 
      previousDirection = currentDirection;
      currentDirection ="left";
      break;    
    case "ArrowRight":
      if(lastInputDirection.x !== 0) break;
      inputDirection = {x:1,y:0}; 
      previousDirection = currentDirection;
      currentDirection ="right";
      break;
  }
})
export function getInputDirection(){
  lastInputDirection = inputDirection
  return inputDirection;
}