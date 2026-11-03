export default function renderBoard(boardElement, gameboard, isComputer = false) {
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

            if (hasShip && !isComputer) {
                cell.classList.add("ship");
            }

            boardElement.appendChild(cell);
        }
    }
}