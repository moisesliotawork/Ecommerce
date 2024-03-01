const cartStr = localStorage.getItem("cart");
const cart = JSON.parse(cartStr);

function updateCartView() {
  const productsList = document.getElementById("productsList");
  const cartQuantity = document.getElementById("cartQuantity");
  const cartTotal = document.getElementById("cartTotal");

  productsList.innerHTML = ""; // Limpiar la lista de productos

  cart.products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product-item");
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;">
            <div class="product-description">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            </div>
        `;
    productsList.appendChild(productElement);
  });

  cartQuantity.textContent = cart.quantity;
  cartTotal.textContent = `$${cart.totalAmount}`;
}

// Asegúrate de llamar a updateCartView cada vez que el carrito se actualice
updateCartView();

document.addEventListener("DOMContentLoaded", function () {
  // Asegúrate de que el DOM está completamente cargado antes de asignar el controlador de eventos

  var checkoutButton = document.getElementById("checkoutButton");
  checkoutButton.addEventListener("click", function () {
    const content = cartToString(cart).replace(" ", "%20").replace("\n", "%0A");
    const enlace =
      "https://api.whatsapp.com/send?phone=584241517153&text=" + content;

    window.location.href = enlace;
  });
});

function productsToString(productsList) {
  return productsList
    .map((product, index) => {
      return `${index + 1}. Nombre: ${product.name}\nDescripción: ${
        product.description
      }\nPrecio: ${product.price}\nCantidad: ${product.quantity}`;
    })
    .join("\n\n");
}

function cartToString(cart) {
  const productsString = productsToString(cart.products);
  const cartSummary = `Pedido ${
    JSON.parse(localStorage.getItem("currentUser")).name
  }\n${productsString}Cantidad de Productos: ${cart.quantity}\nTotal a Pagar: ${
    cart.totalAmount
  }`;
  return cartSummary;
}
