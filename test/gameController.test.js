import Player from "../src/player";
import Gameboard from "../src/gameboard";
import GameController from "../src/gameController"
describe(`game controller Class`,()=>{
    test(`A game controller should create a human player and computer player`,()=>{
        let game = new GameController();
        expect(game.players[0]).toBeInstanceOf(Player)
          expect(game.players[1]).toBeInstanceOf(Player)
          expect(game.players[0].role).toBe(`human`)
          expect(game.players[1].role).toBe(`computer`)
    })
    test(`a game should start with human first`,()=>{
        const game = new GameController();
        expect(game.currentPlayer.role).toBe(`human`)
    })
    test(`a game should switch from human to computer`,()=>{
         const game = new GameController();
         game.switchTurn();
         expect(game.currentPlayer.role).toBe(`computer`)

    })
    test(`game should detect when the human loses`,()=>{
        const game =new GameController();
        for(let entry of game.players[0].gameBoard.ships ){
           for(let i=0;i<entry.ship.length;i++){

               entry.ship.hit();
           }
        }
      

    expect(game.checkWinner()).toBe(game.players[1]);
    })
    test(`game should have no winner at the begining`,()=>{
        const game = new GameController();
        expect(game.checkWinner()).toBeNull();
    })
})