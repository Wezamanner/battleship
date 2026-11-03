import Player from "./player.js";

export default class GameController{
    constructor(){
       const human = new Player(`human`)
        const computer = new Player(`computer`)
        human.placeShipRandomly();
        computer.placeShipRandomly();
        this.players=[human,computer];
        this.currentPlayer=human;

    }
    switchTurn(){
      if(this.currentPlayer===this.players[0])
        {
            this.currentPlayer=this.players[1]
        }else{

          this.currentPlayer=this.players[0] ;
        }

    }
    checkWinner(){
        if(this.players[0].gameBoard.allShipsSunk()){
            return this.players[1];
        }if(this.players[1].gameBoard.allShipsSunk()){
            return this.players[0];
        }
        return null;
    }
}