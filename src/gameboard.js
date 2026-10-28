import Ship from "./ship";

export default class Gameboard{
    constructor(){
        this.ships=[];
        this.missedAttacks=[];
        this.attackedCoordinates=[];
    }
    placeShip(ship,positions){
        if(this.validatePosition(ship,positions)){
                 
        if(positions.some(position=> position[0]<0||position[1]<0||position[0]>7||position[1]>7)){
        return false
    }
        
      if(!this.ships.some(entry =>
    entry.positions.some(existingPosition =>
        positions.some(newPosition =>
          { return (existingPosition[0]===newPosition[0]&&existingPosition[1]===newPosition[1])}
        )
    )
)){
       this.ships.push({
        ship,
      positions
       });
       return true;
    }else{
        return false
    }
}
else
    {
        return false
    }
       
    }
    attack(position){
        if(!this.positionCheck(position)){
    for(let entry of this.ships){
      for(let shipPosition of entry.positions){
        if(shipPosition[1]===position[1]&&shipPosition[0]===position[0]){
            entry.ship.hit();
            this.attackedCoordinates.push(position)
            return;
        }
      }
    }
    this.missedAttacks.push(position)
    this.attackedCoordinates.push(position)
}
}
positionCheck(position){
    for(let entry  of this.attackedCoordinates){
        if(entry[0]===position[0]&&entry[1]===position[1]){
            return true
        }
   }
   return false;
}
allShipsSunk(){
    return this.ships.every(entry=>entry.ship.isSunk());
}
validatePosition(ship,positions){
if(ship.length===positions.length){
    let tempRow=[];
    let tempCol=[];

 for(let entry of positions){
        tempRow.push(entry[0])
        tempCol.push(entry[1])
    }
    const sameRow=tempRow.every(num=>num===positions[0][0])
    const sameCol=tempCol.every(num=>num===positions[0][1])
    let diffrence;
    if(sameRow){
        for(let i=1;i<tempCol.length;i++){
            if(Math.abs(tempCol[i] - tempCol[i - 1]) !== 1)
                diffrence=true;
        }
    }
      if(sameCol){
        for(let i=1;i<tempRow.length;i++){
            if(Math.abs(tempRow[i] - tempRow[i - 1]) !== 1)
                diffrence=true;
        }
    }
    if((sameRow||sameCol)&&!diffrence){

        return true
    }

}
    return false;

}
}