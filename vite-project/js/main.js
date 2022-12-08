import '../styles/style.css'
import { products } from './products.js'

const DOMSelectors = {
  products1: document.getElementById("products1"),
  products2: document.getElementById("products2"),
}

const firstHalf = products.slice(0, products.length / 2);
const secondHalf = products.slice(products.length / 2);

firstHalf.forEach(card => {
  DOMSelectors.products1.insertAdjacentHTML("afterbegin",
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
secondHalf.forEach(card => {
  DOMSelectors.products2.insertAdjacentHTML("afterbegin",
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

