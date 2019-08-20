function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}
// Iteration 1
function getTotalPrice() {
  let basePrice = document.querySelectorAll(".product-cost");
  let userInput = document.querySelectorAll(".qty-class")
  console.log(basePrice, userInput)
  let sum = basePrice.map(function (ele, ind) {
    return ele.innerText * userImput[ind].value
  })
  console.log(sum)
  //let sum = basePrice * userInput;
  let totalItemPrice = document.querySelectorAll(".total-price span").innerHTML = `${sum}`;
  console.log(totalItemPrice);
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  console.log(calculatePriceButton);
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};