function loadUsersFromLocalStorage() {
  // Obtén la cadena almacenada en localStorage para la clave 'users'
  const usersStr = localStorage.getItem("users");

  // Verifica si 'usersStr' existe para evitar errores en JSON.parse
  if (usersStr) {
    // Convierte la cadena JSON a un objeto JavaScript
    const users = JSON.parse(usersStr);
    return users;
  } else {
    return null;
  }
}

document.addEventListener("DOMContentLoaded", loadUsersFromLocalStorage);

function mostrarPopup() {
  document.getElementById("popupError").style.display = "flex";
}

// Función para cerrar el pop-up
function cerrarPopup() {
  document.getElementById("popupError").style.display = "none";
}

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const users = loadUsersFromLocalStorage();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (validarCredenciales(email, password, users)) {
      window.location.href = "../pages/products.html";
    } else {
      console.log("Credenciales inválidas");
      mostrarPopup();
    }
  });

function validarCredenciales(email, password, users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return true;
    }
  }
  return false;
}
