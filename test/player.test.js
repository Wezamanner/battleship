import Player from "../src/player"
import Gameboard from "../src/gameboard"
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
        let reality=player2.generateCoordinate()
        expect(reality).toBeInstanceOf(Array)
        expect(reality).toHaveLength(2)
        expect(reality[0]).toBeGreaterThanOrEqual(0)
        expect(reality[1]).toBeGreaterThanOrEqual(0)
        expect(reality[0]).toBeLessThanOrEqual(7)
         expect(reality[1]).toBeLessThanOrEqual(7)
    })
})