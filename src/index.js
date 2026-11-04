import GameController from "./gameController.js";
import  {renderBoard,addBoardListners}  from "./dom.js";
import "./style.css"

let game = new GameController();
const humanBoard = document.querySelector(`#human-board`)
const computerBoard = document.querySelector(`#computer-board`)
const gameMessage=document.querySelector(`#game-message`)
const restartBtn = document.querySelector(`#restart-btn`) 
 restartBtn.addEventListener(`click`,()=>{
     game = new GameController();
     renderBoard(humanBoard,game.players[0].gameBoard);
renderBoard(computerBoard,game.players[1].gameBoard,true);
gameMessage.innerHTML="";
 })

renderBoard(humanBoard,game.players[0].gameBoard);
renderBoard(computerBoard,game.players[1].gameBoard,true);
addBoardListners(()=>game)
