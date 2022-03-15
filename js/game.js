let lastRenderTime = 0;
import { update as updateSnake, draw as drawSnake, snakeSpeed } from "./snake.js";

const main = currentTime =>{
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
  
    if(secondsSinceLastRender < 1/ snakeSpeed) return;
    console.log("render done");
    lastRenderTime = currentTime;

    // update the snake position 
    update();
    // draw the update on screen
    draw();
}
//  to know how much time it take to render a single frame
window.requestAnimationFrame(main);

const update = () => {
    updateSnake();
}

const draw = () => {
    drawSnake();
}