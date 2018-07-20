import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import View from './entries/container/view';
import registerServiceWorker from './registerServiceWorker';
import { Wishlist } from './models/WishList'
import { getSnapshot } from 'mobx-state-tree'

let initialState = {
    items: [
        {
            name: 'Mark Zuckerberg',
            number: "01115654789",
            image:'https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044',
            summary: 'With his 28 years recently, the co-founder of the social network that is expected to go public this Friday, is already one of the richest men in the world',
            text: 'Zuckerberg was born on May 14, 1984 in White Plains, New York.[11] His parents are Karen (née Kempner), a psychiatrist, and Edward Zuckerberg, a dentist.[12] He and his three sisters, Randi, Donna, and Arielle, were brought up in Dobbs Ferry, New York, a small Westchester County village about 21 miles north of Midtown Manhattan.[13] Zuckerberg was raised in a Reform Jewish household,[14] with ancestors hailing from Germany, Austria and Poland.[15] He had a Star Wars themed Bar Mitzvah when he turned 13[14][16] and once "questioned things" before deciding "religion is very important"'
        },
        {
            name:'Bill Gates',
            number: "0111545682",
            image: "https://specials-images.forbesimg.com/imageserve/5a942b7b31358e79a28a452b/416x416.jpg?background=000000&cropX1=285&cropX2=3498&cropY1=146&cropY2=3360",
            summary: 'Entrepreneur and businessman Bill Gates (born October 28, 1955) and his partner Paul Allen founded and built the world s largest software business, Microsoft, through technological innovation, keen business strategy and aggressive business tactics. In the process, Gates became one of the richest men in the world',
            text: "Over time, the company's stock increased in value and split numerous times. In 1987, Bill Gates became a billionaire when the stock hit $90.75 a share. Since then, Gates has been at the top, or at least near the top, of Forbes' annual list of the top 400 wealthiest people in America. In 1999, with stock prices at an all-time high and the stock splitting eight-fold since its IPO, Gates' wealth briefly topped $101 billion."
        }
    ]
}

let wishList = Wishlist.create(initialState)


function renderApp(){
ReactDOM.render(<View wishList={wishList}/>, document.getElementById('root'));
registerServiceWorker();
}
//  EXAMPLE NODEMON
renderApp()

if(module.hot){
    module.hot.accept(["./components/App"], () => {
        renderApp()
    })
}
module.hot.accept(["./models/WishList"], () => {
    const snapshot = getSnapshot(wishList)
    wishList = Wishlist.create(snapshot)
    renderApp()
})
//setInterval(() => {
   // list.items[0].changePrice(list.items[0].price + 1)
//},1000)
