const productUno = {
  name: "xexcc",
  image: "../image/88i99.jpg",
  price: "$15",
  description: "vybunim,lmghbjnkml,miubyvbjnk",
};
const cart = { totalAmount: 0, quantity: 0, products: [] };

// Simulando la adición de productoUno al carrito
cart.products.push(productUno);
cart.quantity += 1;
cart.totalAmount += parseFloat(productUno.price.substring(1)); // Quita el signo de dólar y convierte a número

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
