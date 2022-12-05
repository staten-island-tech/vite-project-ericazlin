import '../styles/style.css'
import { setupCounter } from './counter.js'

const DOMSelectors = {
  cards: document.querySelector("#products"),

}


const products = [
  {
    name: "donuts",
    image: "https://cdn.discordapp.com/attachments/970059739318849597/1049201473831059466/donuts.jpg"
  },
  {
    name: "chips",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049201473617141872/chips.jpg`
  }
]


products.forEach(element => {
  DOMSelectors.cards.insertAdjacentHTML("beforebegin",
    `
  <div id=card>
  <img src=${element.image})image}>
  <h1> this is ${element.name} </h1>
  </img>
  </div>
  `
  )
})

