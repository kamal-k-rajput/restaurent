let cartData = JSON.parse(localStorage.getItem("cart"));
let cartId = document.getElementById("cart");
let total =  0;
let totalPrice = document.getElementById("total");
cartItems(cartData);
function cartItems(cartData) {
    cartId.textContent = "";
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let trheader = document.createElement("tr");
    let dish = document.createElement("th");
    dish.textContent = "Dish";
    let name = document.createElement("th");
    name.textContent = "Name";
    let price = document.createElement("th");
    price.textContent = "Price";
    let remove = document.createElement("th");
    remove.textContent = "Remove";
    trheader.append(dish, name, price, remove);
    thead.append(trheader);
    table.append(thead);
    cartData.forEach(function (el) {
        showCart(el, table);
    });
    cartId.append(table);
}
function showCart(el, table) {
    let tbody = document.createElement("tbody");
    total += +el.price;
    localStorage.setItem("total", JSON.stringify(total));
    let tr = document.createElement("tr");
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let name = document.createElement("td");
    name.textContent = el.strMeal;
    let price = document.createElement("td");
    price.textContent = el.price;
    let remove = document.createElement("td");
    remove.setAttribute("id", "remove");
    remove.onclick = function () {
        removeItem(el);
    };
    remove.textContent = "Remove";
    tr.append(img, name, price, remove);
    tbody.append(tr);
    table.append(tbody);
}

function removeItem(el) {
    let id = el.idMeal;
    let cartData = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].idMeal === id) {
            cartData.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(cartData));
            cartItems(cartData);
            console.log(cartData);
            break;
        }
    }
}
console.log(total);
totalPrice.textContent = `Total Cart Price: ₹ ${total}`;