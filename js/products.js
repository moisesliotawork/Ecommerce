const cart = { totalAmount: 0, quantity: 0, products: [] };

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
  const modal = document.getElementById("productModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.querySelector(".close");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productTitle = this.getAttribute("data-title");
      const productPrice = this.getAttribute("data-price");
      const productDescription = this.getAttribute("data-description");
      const productImage = this.getAttribute("data-image");

      modalTitle.textContent = productTitle;
      modalPrice.textContent = productPrice;
      modalDescription.textContent = productDescription;
      modalImage.src = productImage;

      modal.style.display = "block"; // Muestra la ventana emergente
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none"; // Oculta la ventana emergente
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"; // Oculta la ventana cuando se hace clic fuera de ella
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const minusButtons = document.querySelectorAll(".quantity-btn.minus");
  const plusButtons = document.querySelectorAll(".quantity-btn.plus");
  const quantityInputs = document.querySelectorAll(".quantity-input");

  plusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.previousElementSibling;
      input.value = parseInt(input.value) + 1;
      input.previousElementSibling.disabled = false; // Habilita el botón de menos (-) si es necesario
    });
  });

  minusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.nextElementSibling;
      if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
      }
      if (input.value == 1) {
        this.disabled = true; // Deshabilita el botón de menos (-) si el valor es 1
      }
    });
  });

  // Asegúrate de que los botones de menos (-) estén deshabilitados si el valor es 1 al cargar la página
  quantityInputs.forEach((input) => {
    if (input.value == 1) {
      input.previousElementSibling.disabled = true;
    }
  });
});
