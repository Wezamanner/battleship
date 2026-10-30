import Gameboard from "./gameboard";
export default class Player {
    constructor(role) {
        this.role = role;
        this.gameBoard=new Gameboard();
        // Your turn: what property should store the player's gameboard?
    }
    attack(position,player){
        player.gameBoard.attack(position)
    }
   generateCoordinate(){
        let firstNumber =Math.floor(Math.random()*8)
        let secondNumber = Math.floor(Math.random()*8)
      
        return [firstNumber,secondNumber]
    }
}