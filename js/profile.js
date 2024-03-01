function signOut() {
  eliminarCart();
  // Aquí iría la lógica para cerrar la sesión del usuario
  alert("Has cerrado la sesión.");
  // Redirigir al usuario a la página de inicio o de inicio de sesión
  window.location.href = "../pages/index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // Recuperar el objeto currentUser de localStorage
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // Actualizar el HTML con la información de currentUser
    document.querySelector(".user-details h2").textContent = currentUser.name; // Actualiza el nombre de usuario
    document.querySelector(".user-details p:nth-child(2)").textContent =
      "Email: " + currentUser.email; // Actualiza el email

    // Aquí necesitarás un valor adicional si quieres mostrar "Miembro desde"
    // como parte de tu objeto currentUser o alguna lógica para determinarlo.
    // Por ahora, se dejará el valor estático, pero puedes ajustarlo según sea necesario.
  } else {
    // Manejar la ausencia de currentUser, opcional
    console.log("No hay información de usuario disponible.");
  }
});

function eliminarCart() {
  localStorage.removeItem("cart");
}
