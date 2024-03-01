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

function saveUsersToLocalStorage(users) {
  // Convierte el arreglo de usuarios a una cadena JSON
  const usersStr = JSON.stringify(users);
  // Guarda la cadena en localStorage con la clave 'users'
  localStorage.setItem("users", usersStr);
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

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm-password").value;

    if (validarNombre(fullname)) {
      if (!validarEmail(email, users)) {
        if (validarPassword(password, confirmPass)) {
          const newUser = {
            email: email,
            password: password,
            name: fullname,
          };

          users.push(newUser);
          saveUsersToLocalStorage(users);

          window.location.href = "../pages/products.html";
        } else {
          const msgPass = "Las contraseñas no coinciden";
          mostrarPopup(msgPass);
        }
      } else {
        const msgEmail = "El email ya se encuentra registrado";
        mostrarPopup(msgEmail);
      }
    } else {
      const msgName = "El nombre es invalido, debe tener más de 3 caracteres";
      mostrarPopup(msgName);
    }
  });

function validarNombre(fullname) {
  if (fullname.length >= 3) {
    return true;
  }
  return false;
}

function validarEmail(email, users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return true;
    }
  }
  return false;
}

function validarPassword(password, confirmPass) {
  if (password === confirmPass) {
    return true;
  }
  return false;
}
