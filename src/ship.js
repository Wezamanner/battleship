export default class Ship{
    constructor(length){
        this.length=length;
        this.hits = 0;
    }
    isSunk(){
        if(this.length>this.hits){
            return false;
        }else{
            return true;
        }
    }
    hit(){
        if(!this.isSunk()){
        this.hits++;
    }
    }
}