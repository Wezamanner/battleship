export  function renderBoard(boardElement, gameboard, isComputer = false) {
    boardElement.innerHTML = "";

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement("div");

            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;

            const hasShip = gameboard.ships.some(entry =>
                entry.positions.some(position =>
                    position[0] === row && position[1] === col
                )
            );
            const hasBeignAttacked=gameboard.attackedCoordinates.some(entry=>entry[0]==row&&entry[1]==col)
            const hasbeignMissed=gameboard.missedAttacks.some(entry=>entry[0]===row&&entry[1]===col)

            if (hasShip && !isComputer) {
                cell.classList.add("ship");
            }
            if(hasBeignAttacked&&!hasbeignMissed){
                cell.classList.add(`hit`)
                    }
                   else if(hasbeignMissed){
                    cell.classList.add(`miss`)
                   }
            boardElement.appendChild(cell);
        }
    }
}
export function addBoardListners(callBack){
const enemyBoard = document.querySelector(`#computer-board`)
const humanBoard = document.querySelector(`#human-board`)
const gameMessage = document.querySelector(`#game-message`)
enemyBoard.addEventListener(`click`,(event)=>{
    const gameController=callBack();
    if (gameController.checkWinner() !== null) return;
    const clickedDiv = event.target;
    if (!event.target.classList.contains("cell")) return;
  const attackedRow = Number(clickedDiv.dataset.row);
const attackedCol = Number(clickedDiv.dataset.col);
if(gameController.players[1].gameBoard.attackedCoordinates.some(entry=>entry[0]===attackedRow&&entry[1]===attackedCol))return;
gameController.players[0].attack([attackedRow,attackedCol],gameController.players[1])
if(gameController.checkWinner()===null){
    gameController.players[1].computerAttack(gameController.players[0])
    }
const winner = gameController.checkWinner();

renderBoard(humanBoard,gameController.players[0].gameBoard,false)
renderBoard(enemyBoard,gameController.players[1].gameBoard,true)
if(winner!==null){
    gameMessage.textContent=`${winner.role} has won the match🏅`
}
});
}