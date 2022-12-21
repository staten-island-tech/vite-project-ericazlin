import '../styles/style.css'
import { products } from './products.js'

const DOMSelectors = {
  products1: document.getElementById("products1"),
  products2: document.getElementById("products2"),
  products3: document.getElementById("products3"),
  everything: document.querySelector(".everything"),
  everything2: document.querySelector(".everything2"),
  btn: document.querySelector(".btn"),
  filter: document.getElementById("filter"),
  doofBtn: document.getElementById("doofBtn"),
  existBtn: document.getElementById("existBtn"),
}

function filteringBool(productAttr) {
  const productsFiltered = products.filter(product => product[productAttr] == true)
  const firstHalf = productsFiltered.slice(0, Math.ceil(productsFiltered.length / 3));
  const secondHalf = productsFiltered.slice(Math.ceil(productsFiltered.length / 3), 2*Math.ceil(productsFiltered.length / 3));
  const thirdHalf = productsFiltered.slice(2*Math.ceil(productsFiltered.length / 3));
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
  thirdHalf.forEach(card => {
    DOMSelectors.products3.insertAdjacentHTML("afterbegin",
      `
      <div id=card>
      <img src=${card.image}>
      <h1 id="text"> this is ${card.name} </h1>
      </img>
      
      </div>
      `
    )
  })
}

function clearProducts () {
  DOMSelectors.products1.innerHTML = ""
  DOMSelectors.products2.innerHTML = ""
  DOMSelectors.products3.innerHTML = ""
}

filteringBool("exists")

DOMSelectors.doofBtn.addEventListener("click", function () {
  clearProducts()
  filteringBool("food")
  })

DOMSelectors.existBtn.addEventListener("click", function () {
  clearProducts()
  filteringBool("exists")
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