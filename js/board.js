const GAMEBOARD_SIZE = 15;
export function randomizeFruitPosition(){
  return{
    x: Math.floor(Math.random() * GAMEBOARD_SIZE) + 1,
    y: Math.floor(Math.random() * GAMEBOARD_SIZE) + 1
  }
}

export function outOfBounds(position){
  return(
    position.x < 1 || position.x > GAMEBOARD_SIZE || 
    position.y < 1 || position.y > GAMEBOARD_SIZE
  )
}