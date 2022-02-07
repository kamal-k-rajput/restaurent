let id = document.getElementById("submit");
id.addEventListener("click", submitForm);
function submitForm(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let num = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;

  if (name !== "" && email !== "" && address !== "" && num !== "") {
    time();
  }
}
let t = 3000;
function time() {
  setTimeout(function () {
    alert(" Your order placed.");
  }, 0);
  setTimeout(function () {
    alert(" Your order is being cooked");
  }, t);
  setTimeout(function () {
    alert(" Your order is ready.");
  }, t+8000);
  setTimeout(function () {
    alert("  Order out for delivery");
  }, t+12000);
  setTimeout(function () {
    alert("  Order delivered");
  }, t+16000);
}
