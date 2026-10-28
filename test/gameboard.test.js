import Gameboard from '../src/gameboard'
import Ship from '../src/ship';
describe(`Gameboard`, ()=>{
    test(`a new gameboard should have no ships`,()=>{
        const gameboard = new Gameboard();
        expect(gameboard.ships.length).toBe(0)
    })
    test(`after calling placeShip method the ships array should contain atleast one ship`,()=>{
        const gameboard = new Gameboard();
        const ship = new Ship(2);
        gameboard.placeShip(ship, [[2, 3], [2, 4]]);
        expect(gameboard.ships).toHaveLength(1)
        expect(gameboard.ships[0].ship).toBe(ship);
    })
    test(`a hit on the ships coordinate should increase hits value by 1`,()=>{
          const gameboard = new Gameboard();
          const ship = new Ship(2);
          gameboard.placeShip(ship,[[2, 3], [2, 4]])
          gameboard.attack([2,4])
          expect(ship.hits).toBe(1)
    })
    test(`a hit on a coordinate that doesnt have ship must be stored on missed attack`,()=>{
         const gameboard = new Gameboard();
          const ship = new Ship(2);
          gameboard.placeShip(ship,[[2, 3], [2, 4]]);
        gameboard.attack([5,5])
        expect(gameboard.missedAttacks).toContainEqual([5,5]);
    
    })
    test(`attacking the same coordinate should not increase the hit value`,()=>{
          const gameboard = new Gameboard();
          const ship = new Ship(2);
          gameboard.placeShip(ship,[[2, 3], [2, 4]]);
          gameboard.attack([2,4])
          gameboard.attack([2,4])
          expect(ship.hits).toBe(1);
    })
    test(`allShipSunk should return true if every ship has sunk`,()=>{
         const gameboard = new Gameboard();
          const ship = new Ship(2);
           gameboard.placeShip(ship,[[2, 3], [2, 4]]);
            gameboard.attack([2,4])
            gameboard.attack([2,3])
            expect(gameboard.allShipsSunk()).toBe(true);
    })
        test(`allShipSunk should return true if every ship has sunk`,()=>{
         const gameboard = new Gameboard();
          const ship = new Ship(2);
          const ship2 = new Ship(1);
           gameboard.placeShip(ship,[[2, 3], [2, 4]]);
           gameboard.placeShip(ship2,[[3,3]])
            gameboard.attack([2,4])
            gameboard.attack([2,3])
            expect(gameboard.allShipsSunk()).toBe(false);
        })
        test(`two ship coordinates shoudnot overlap`,()=>{
         const gameboard = new Gameboard();
          const ship = new Ship(2);
          const ship2 = new Ship(1);
          gameboard.placeShip(ship,[[2, 3], [2, 4]]);
          expect(gameboard.placeShip(ship2,[[2,3]])).toBe(false)
        })
        test(`Ships should stay inside the board`,()=>{
          const gameboard = new Gameboard();
          const ship = new Ship(2);
           expect(gameboard.placeShip(ship,[[8,4], [7, 4]])).toBe(false);
        })
        test(`a ship with length 3 shoudlnt be accepted if there is two coordinates only`,()=>{
            const gameboard = new Gameboard();
          const ship = new Ship(3);
          expect(gameboard.placeShip(ship,[[2, 3], [2, 4]])).toBe(false)

        })
        test(` a ships coordinate should create a straight line `,()=>{
            const gameboard = new Gameboard();
          const ship = new Ship(3);
          expect(gameboard.placeShip(ship,[[1, 1], [3, 4], [5, 2]])).toBe(false)
        })
        test(`every coordinates should be consecutive `,()=>{
             const gameboard = new Gameboard();
          const ship = new Ship(3);
          expect(gameboard.placeShip(ship,[[1, 1], [1, 4], [1, 3]])).toBe(false)
        })
})