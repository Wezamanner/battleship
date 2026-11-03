import GameController from "./gameController.js";
import  renderBoard  from "./dom.js";
import "./style.css"

const game = new GameController();

const humanBoard = document.querySelector(`#human-board`)
const computerBoard = document.querySelector(`#computer-board`)

renderBoard(humanBoard,game.players[0].gameBoard);
renderBoard(computerBoard,game.players[1].gameBoard,true);