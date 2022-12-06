import '../styles/style.css'
import { setupCounter } from './counter.js'

const DOMSelectors = {
  products: document.getElementById("products"),
}

const products = [
  {
    name: "donuts",
    image: "https://cdn.discordapp.com/attachments/970059739318849597/1049201473831059466/donuts.jpg"
  },
  {
    name: "chips",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049201473617141872/chips.jpg`
  },
  {
    name: "minced meat",
    image: "https://cdn.discordapp.com/attachments/970059739318849597/1049201474149822515/minced_meat.jpg"
  },
  {
    name: "whole bread",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049201474380505128/whole_bread.jpg`
  },
  {
    name: "windscreen washer",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049201474653143050/windscreen_washer.jpg`
  },
  {
    name: "instant meal",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049533404074483733/image.png`
  },
]


products.forEach(card => {
  DOMSelectors.products.insertAdjacentHTML("afterbegin",
    `
    <div id=card>
    <img src=${card.image}>
    <h1> this is ${card.name} </h1>
    </img>
    <button id="btn"><label>Add to Cart</label></button>
    </div>
   
    
    `
  )
})

