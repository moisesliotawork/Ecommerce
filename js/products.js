document.addEventListener("DOMContentLoaded", function () {
  // Cuando el documento esté cargado completamente
  var modals = document.querySelectorAll(".btn-add-to-cart");

  // Función para abrir la ventana emergente
  function openModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "block";
  }

  // Función para cerrar la ventana emergente
  function closeModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

  // Agrega evento a cada botón para abrir la ventana emergente
  modals.forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });

  // Agrega evento al botón de cerrar para cerrar la ventana emergente
  var closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", closeModal);
});
