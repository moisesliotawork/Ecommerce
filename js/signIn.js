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

function mostrarPopup(mensaje) {
  // Selecciona el párrafo donde quieres insertar el mensaje dinámico
  const popupMessage = document.getElementById("popupMessage");

  // Actualiza el contenido del párrafo con el mensaje recibido
  popupMessage.textContent = mensaje;

  // Muestra el pop-up modificando el estilo 'display'
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

    if (validarCorreo(email, users)) {
      if (validarCredenciales(email, password, users)) {
        saveUsersToLocalStorage(searchUser(email, users));
        window.location.href = "../pages/products.html";
      } else {
        const msgPassword = "Contraseña inválida";
        //console.log("Credenciales inválidas");
        mostrarPopup(msgPassword);
      }
    } else {
      const msgEmail = "El email no se encuentra registrado";
      //console.log("Credenciales inválidas");
      mostrarPopup(msgEmail);
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

function validarCorreo(email, users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return true;
    }
  }
  return false;
}

function saveUsersToLocalStorage(currentUser) {
  // Convierte el arreglo de usuarios a una cadena JSON
  const usersStr = JSON.stringify(currentUser);
  // Guarda la cadena en localStorage con la clave 'users'
  localStorage.setItem("currentUser", usersStr);
}

function searchUser(email, users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }
  return null;
}
