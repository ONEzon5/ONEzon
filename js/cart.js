const cartItems = [
  { name: "منتج 1", price: 5000 },
  { name: "منتج 2", price: 3000 },
  { name: "منتج 3", price: 2000 },
];

const cartContainer = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

function displayCart() {
  let total = 0;
  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.textContent = `${item.name} - ${item.price} جنيه`;
    cartContainer.appendChild(div);
    total += item.price;
  });
  totalPriceEl.textContent = `المجموع الكلي: ${total} جنيه`;
}

function confirmOrder() {
  window.location.href = "confirm.html";
}

displayCart();
