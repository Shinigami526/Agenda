import { types, getParent, destroy } from 'mobx-state-tree'

export const WishListItem = types.model({
    name: types.string,
    number: types.string,
    image: types.string,
    summary: types.string,
    text: types.string
})
  .actions(self => ({
      changeName(newName) {
          self.name = newName
      },
      changeNumber(newPrice) {
          self.number = newPrice
      },
      changeImage(newImage) {
          self.image = newImage
      },
      changeSummary(newSummary){
          self.summary = newSummary
      },
      changeText(newText){
          self.text = newText
      },
      remove(){
         getParent(self, 2).remove(self)
      }
  }))

export const Wishlist = types.model({
    items: types.optional(types.array(WishListItem), [])
})
  .actions(self => ({
      add(item) {
          self.items.push(item)
      },
      remove(item) {
        destroy(item)
      }
  }))
     