import Player from "../src/player"
import Gameboard from "../src/gameboard"
import Ship from "../src/ship"
describe(`Player class`,()=>{
    test(`an instance of player instanciated with human should have role human with game board instance `,()=>{
        const player = new Player(`human`);

        expect(player.role).toBe(`human`)
        expect(player.gameBoard).toBeInstanceOf(Gameboard)
    })
    test(`mocking the attack on opponents gameBoard`,()=>{
        const player1 = new Player(`Human`)
        const player2 = new Player(`Computer`)
        player2.gameBoard.attack=jest.fn();
        player1.attack([1,3],player2)
        expect(  player2.gameBoard.attack).toHaveBeenCalledWith([1,3]);
    })
    test(`random coordinate generation for the computer`,()=>{
         const player2 = new Player(`Computer`)
         const player1 = new Player(`human`)
        let reality=player2.generateCoordinate(player1)
        expect(reality).toBeInstanceOf(Array)
        expect(reality).toHaveLength(2)
        expect(reality[0]).toBeGreaterThanOrEqual(0)
        expect(reality[1]).toBeGreaterThanOrEqual(0)
        expect(reality[0]).toBeLessThanOrEqual(7)
         expect(reality[1]).toBeLessThanOrEqual(7)
    })
    test(`a computer generated [3,4] shoulnt repeat that coordinate`,()=>{
        const player1 = new Player(`computer`)
        const player2 = new Player(`human`)
         let first = player1.generateCoordinate(player2);
        player1.gameBoard.attack(first)
        let second = player1.generateCoordinate(player2);
        let attackedCoordinates=player2.gameBoard.attackedCoordinates
        player1.gameBoard.attack(second)
       
        expect(second).not.toContainEqual(attackedCoordinates);
    })
    test(`check for the avoidation of repition`,()=>{
      jest.spyOn(Math,"random").mockReturnValueOnce(0.375).mockReturnValueOnce(.5).mockReturnValueOnce(.25).mockReturnValueOnce(.625);
        const player1 = new Player(`computer`)
        const player2 = new Player(`human`)
        player2.gameBoard.attackedCoordinates=[[3,4]]
        let expected=player1.generateCoordinate(player2)
        expect(expected).toEqual([2,5])
        
    })
    test(`testing the computer attack function`,()=>{
         jest.spyOn(Math,"random").mockReturnValueOnce(0.375).mockReturnValueOnce(.5) 
        const player1 = new Player(`computer`)
        const player2 = new Player(`human`);
        player2.gameBoard.attack=jest.fn();
        player1.computerAttack(player2)
        expect(player2.gameBoard.attack).toHaveBeenCalledTimes(1);
        expect(player2.gameBoard.attack).toHaveBeenCalledWith([3,4])
    })
    test(`a new player should have 5 ships`,()=>{
        let player1= new Player(`human`);
        expect(player1.ships).toHaveLength(5)
        for(let i in player1.ships){
            expect(player1.ships[i]).toBeInstanceOf(Ship)
        }
    })
    test(`the computer should generate position to the ships in the player ship array`,()=>{
        const player1= new Player(`human`)
        const player2 = new Player(`computer`)
        player2.placeShipRandomly();
        expect(player2.gameBoard.ships).toHaveLength(5)
    })
    afterEach(() => {
    jest.restoreAllMocks();
});
})