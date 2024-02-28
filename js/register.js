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

