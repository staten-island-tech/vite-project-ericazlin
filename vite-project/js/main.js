import '../styles/style.css'
import { products } from './products.js'

const DOMSelectors = {
  products1: document.getElementById("products1"),
  products2: document.getElementById("products2"),
  btn: document.querySelector(".btn"),
  filter: document.getElementById("filter"),
}

const firstHalf = products.slice(0, products.length / 2);
const secondHalf = products.slice(products.length / 2);

firstHalf.forEach(card => {
  DOMSelectors.products1.insertAdjacentHTML("afterbegin",
    `
    <div id=card>
    <img src=${card.image}>
    <h1 id="text"> this is ${card.name} </h1>
    </img>
    
    </div>
    `
  )
})
secondHalf.forEach(card => {
  DOMSelectors.products2.insertAdjacentHTML("afterbegin",
    `
    <div id=card>
    <img src=${card.image}>
    <h1 id="text"> this is ${card.name} </h1>
    </img>
    
    </div>
    `
  )
})


//theme buttons
document.getElementById("themebtton").addEventListener("click", function () {
  if (document.body.classList.contains("pinkMode")) {
      document.body.classList.add("greenMode");
      document.body.classList.remove("pinkMode");
  } else {
      document.body.classList.add("pinkMode");
      document.body.classList.remove("greenMode");
  }
});