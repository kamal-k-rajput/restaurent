let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian ";

let menu = document.getElementById("menu");
async function fetchData() {
  try {
    let dataRequest = await fetch(url);
    let data = await dataRequest.json();
      appendData(data.meals);
      console.log(data.meals);
    // console.log(data);
  } catch (e) {
    console.log(e);
  }
}
fetchData();
function appendData(dishes) {
  menu.textContent = "";
  //   let cards = document.createElement("div");
  dishes.forEach(function (dish) {
    showData(dish, menu);
  });
  //   menu.append(cards);
}
//Name, image, price and add to cart button.
function showData(dish, cards) {
  let card = document.createElement("div");
  card.setAttribute("id", "card");
  let name = document.createElement("div");
  name.textContent = dish.strMeal;

  let image = document.createElement("img");
  image.src = dish.strMealThumb;

  let price = document.createElement("p");
  let rate = Math.round(Math.random() * 500);
  price.innerHTML = `₹ ${rate}`;
  let button = document.createElement("button");
  button.setAttribute("id", "addtocart");
  button.textContent = "Add to Cart";
  button.onclick = function () {
    dish["price"] = rate;
    // console.log("add to cart");
    addToCart(dish);
  };
  card.append(image, name, price, button);
  cards.append(card);
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(dish) {
  console.log("add to cart");
    cart.push(dish);
    cartLength();
  localStorage.setItem("cart", JSON.stringify(cart));
}
cartLength();
function cartLength() {
    let count = document.getElementById("count");
    count.textContent = `cart ${cart.length}`;
}