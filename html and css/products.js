/*const products = [
  {
    id: 1,
    name: "Wooden Toy Car",
    price: 299,
    image: "/images/car.jpg",
    description: "Eco-friendly wooden toy car for kids."
  },
  {
    id: 2,
    name: "Wooden Doll",
    price: 499,
    image: "/images/doll.jpg",
    description: "Handmade wooden doll."
  },
  {
    id: 3,
    name: "Wooden Train",
    price: 799,
    image: "/images/train.jpg",
    description: "Colorful wooden train set."
  }
];

function viewDetails(id) {
  const product = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product-details.html";
}