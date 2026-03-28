const products = [
 
  {
    id: 1,
    name: "Wooden Car",
    price: 299,
    image: "../images/doll1.jpg",
    description: "Eco-friendly toy"
  },
  {
    id: 2,
    name: "Wooden Doll",
    price: 499,
    image: "../images/doll2.jpg",
    description: "Handmade doll"
  },
   {
    id: 3,
    name: "Wooden Doll",
    price: 200,
    image: "../images/doll7.jpg",
    description: "Tiny Timber Tots"
  },
   {
    id: 4,
    name: "Wooden Doll",
    price: 400,
    image: "../images/doll9.jpg",
    description: "Woody Whimsy"
  },
   {
    id: 5,
    name: "Wooden Doll",
    price: 250,
    image: "../images/doll11.jpeg",
    description: "Oakie Dokie Doll"
  },
   {
    id: 6,
    name: "Wooden Doll",
    price: 450,
    image: "../images/doll6.jpg",
    description: "Artisian Ash Doll"
  },

];

function changeQty(value, price) {
  const qtyInput = document.getElementById("popup-qty");
  let qty = Number(qtyInput.value);

  qty += value;
  if (qty < 1) qty = 1;

  qtyInput.value = qty;

  // ✅ Update total when quantity changes
  updateTotal(price);
}
function updateTotal(price) {
  const qty = Number(document.getElementById("popup-qty").value);
  const total = price * qty;

  document.getElementById("popup-total").innerText = "Total: ₹" + total;
}
function viewDetails(id) {
  const product = products.find(p => p.id === id);

  const popup = document.getElementById("popup");
  const content = document.getElementById("popupContent");
 popup.style.display = "flex";
  content.innerHTML = `
  <span class="close" onclick="closePopup()">×</span>

  <img src="${product.image}" />

  <div class="popup-info">
    <h2>${product.name}</h2>
    <p class="price">₹${product.price}</p>
    <p>${product.description}</p>
       <div>
    <label>Quantity:</label>
    <button onclick="changeQty(-1, ${product.price})">-</button>
    <input type="number" id="popup-qty" value="1" min="1" 
           oninput="updateTotal(${product.price})">
    <button onclick="changeQty(1, ${product.price})">+</button>
  </div>

  <!-- ✅ Total Price -->
  <p id="popup-total"><b>Total: ₹${product.price}</b></p>

  <br>
  

    <button onclick="addToCart(${product.id})">
    Add to Cart 🛒
  </button>
  </div>
`;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart 🛒");
}