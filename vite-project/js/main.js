import '../styles/style.css'
import {products} from './products.js'

const DOMSelectors = {
    everything: document.querySelector(".everything"),
    btn: document.querySelector(".btn"),
    filter: document.getElementById("filter"),
        doofBtn: document.getElementById("doofBtn"),
        existBtn: document.getElementById("existBtn"),
        frozenBtn: document.getElementById("frozenBtn"),
        snackBtn: document.getElementById("snackBtn"),
        freshBtn: document.getElementById("freshBtn"),
        chemicalsBtn: document.getElementById("chemicalsBtn"),
        hotFoodBtn: document.getElementById("hotFoodBtn"),
        carPartsBtn: document.getElementById("carPartsBtn"),
        drinksBtn: document.getElementById("drinksBtn"),
        coldFoodBtn: document.getElementById("coldFoodBtn"),
        candyBtn: document.getElementById("candyBtn"),
        bakedBtn: document.getElementById("bakedBtn"),
}

function filteringBool(productAttr) {

    const productsFiltered = products.filter(product => product[productAttr] == true)

    productsFiltered.forEach(card => {
        DOMSelectors.everything.insertAdjacentHTML("afterbegin",
                                                  `
      <div id=card>
      <img src=${card.image}>
      <h1 id="text"> this is ${card.name} </h1>
      </img>

      </div>
      `
      )
    })
    console.log(productsFiltered)
}

function clearProducts() {
    DOMSelectors.everything.innerHTML = ""
}

filteringBool("exists")

DOMSelectors.existBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("exists")
})

DOMSelectors.doofBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("food")
})

DOMSelectors.frozenBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("frozen")
})

DOMSelectors.snackBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("snack")
})

DOMSelectors.freshBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("fresh")
})

DOMSelectors.chemicalsBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("chemicals")
})

DOMSelectors.hotFoodBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("hotFood")
})

DOMSelectors.carPartsBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("carParts")
})

DOMSelectors.drinksBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("drinks")
})

DOMSelectors.coldFoodBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("coldFood")
})

DOMSelectors.candyBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("candy")
})

DOMSelectors.bakedBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("baked")
})

//theme buttons
document.getElementById("themebtton").addEventListener("click", function () {
    if (document.body.classList.contains("greenMode")) {
        document.body.classList.replace("greenMode", 'pinkMode');
    } else {
        document.body.classList.replace("pinkMode", 'greenMode');
    }
});