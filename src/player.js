import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
export default class Player {
    constructor(role) {
        this.role = role.toLowerCase();
        this.gameBoard=new Gameboard();
        this.ships=[
            new Ship(5),
            new Ship(4),
            new Ship(3),
            new Ship(3),
          new Ship(2)
        ]
       
    }
    attack(position,player){
        player.gameBoard.attack(position)
    }
   generateCoordinate(player){
        let firstNumber =Math.floor(Math.random()*8)
        let secondNumber = Math.floor(Math.random()*8)
      if(this.checkRepition(player,[firstNumber,secondNumber])){
        
        return [firstNumber,secondNumber]
      }
      return this.generateCoordinate(player)
    }
  checkRepition(player,coordinate){
    let check= player.gameBoard.attackedCoordinates.some(entry=>entry[0]==coordinate[0]&&entry[1]==coordinate[1])
    if(check){
        return false;
    }
    return true;
}
computerAttack(player){
    player.gameBoard.attack(this.generateCoordinate(player))
}
placeShipRandomly(){
    let coordinates=[]
    for(const ship of this.ships){
        let placementSuccesfull= false;
        while(!placementSuccesfull){
            let temp=[]
            let horizontalCheck= Math.floor(Math.random()*2)
            if(horizontalCheck==0){
            temp[0]= Math.floor(Math.random()*(8-ship.length+1))
            temp[1]=Math.floor(Math.random()*8)
               for(let i =0;i<ship.length;i++){
            
             coordinates.push([temp[0]+i,temp[1]])
            }
        }else{
            temp[0]=Math.floor(Math.random()*8)
            temp[1]= Math.floor(Math.random()*(8-ship.length+1))
            for(let i =0;i<ship.length;i++){
            
             coordinates.push([temp[0],temp[1]+i])
            }
        }
        
        placementSuccesfull=this.gameBoard.placeShip(ship,coordinates,)
        coordinates=[];
    }
    }
}
}