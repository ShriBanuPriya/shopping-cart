let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-container");
const totalEl = document.getElementById("grand-total");

function changeQty(index, value) {
  cart[index].qty += value;

  if (cart[index].qty < 1) {
    cart[index].qty = 1;
  }

  
}
function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}
function displayCart() {
  container.innerHTML = "";

  let grandTotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}" />
      
      <div>
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>

        <!-- Quantity -->
        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>

        <p>Total: ₹${itemTotal}</p>
      </div>

      <button onclick="removeItem(${index})">Remove</button>
    `;

    container.appendChild(div);
  });

  totalEl.innerText = "Grand Total: ₹" + grandTotal;

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));
}
displayCart();