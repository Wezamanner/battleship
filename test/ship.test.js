import Ship from '../src/ship'

describe(`ship`,()=>{
    test("a created ship shouldnt sink",()=>{
        let ship = new Ship(3)
        let reality=ship.isSunk();
        expect(reality).toBe(false)
    })
    test(`hit should increase the hit count by one`,()=>{
        const ship = new Ship (3);
        ship.hit();
        expect(ship.hits).toBe(1)
    })
    test(`a ship should be sunk after receiving as many hits as its length`,()=>{
        const ship = new Ship (3);
        for(let i =0;i<ship.length;i++){
        ship.hit();
        }
        expect(ship.isSunk()).toBe(true)
    })
    test('a sunk ship should not receive additional hits', () => {
        const ship = new Ship(2)
        ship.hit()
        ship.hit()
        ship.hit()

        expect(ship.hits).toBe(2)
    })
})

