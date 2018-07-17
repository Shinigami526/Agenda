import { WishListItem, Wishlist } from './WishList'
import { getSnapshot, onSnapshot } from 'mobx-state-tree'

it('can create a instance of a model', () => {
    const item = WishListItem.create({
        "name": "Chronicles of Narnia Box Set - C.S Lewis",
        "number": "0111565471",
        "image": "",
        "summary":"Chronicles of Narnia",
        "text": "Box Set - C.S Lewis" 
    })

    expect(item.number).toBe('0111565471')
    expect(item.image).toBe("")
    item.changeName("Narnia")
    expect(item.name).toBe("Narnia")
})


it("can add new items", () => {
    const list = Wishlist.create()
    const states = []
    onSnapshot(list, snapshot => {
        states.push(snapshot)
    })
    list.add({
        name: "Chesterton",
        number: "0111565225",
        image: "",
        summary: "Chronicles of Narnia",
        text: "Box Set - C.S Lewis"
    })
    expect(list.items.length).toBe(1)
    expect(list.items[0].name).toBe('Chesterton')
    list.items[0].changeName("Book of G.K Chesterton")
    expect(list.items[0].name).toBe("Book of G.K Chesterton")
    
    expect(getSnapshot(list)).toMatchSnapshot()
    
    expect(states).toMatchSnapshot()
})

