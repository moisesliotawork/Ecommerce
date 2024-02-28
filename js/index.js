const userUno = {
  email: "adalith@gmail.com",
  password: "1234",
  name: "Adalith",
  telefono: "04261234567",
};

const userDos = {
  email: "ares@gmail.com",
  password: "1234",
  name: "Ares",
};
const userTres = {
  email: "josefilardi@gmail.com",
  password: "1234",
  name: "Jose",
  telefono: "04248731627",
};
const userCuatro = {
  email: "jhosue@gmail.com",
  password: "1234",
  name: "Jhosue",
  telefono: "0414765289",
};
const userCinco = {
  email: "robertDoc@gmail.com",
  password: "1234",
  name: "Robert",
  telefono: "04265432712",
};

const userSeis = {
  email: "naysojeda@gmail.com",
  password: "1234",
  name: "Nays",
  telefono: "04123890088",
};

const userSiete = {
  email: "moisesliota@gmail.com",
  password: "1234",
  name: "Moises",
  telefono: "04120076561",
};

const users = [
  userUno,
  userDos,
  userTres,
  userCuatro,
  userCinco,
  userSeis,
  userSiete,
];

// En la nueva página
document.addEventListener("DOMContentLoaded", function () {
  // Llama a la función para guardar el arreglo en localStorage
  saveUsersToLocalStorage(users);
});

function saveUsersToLocalStorage(users) {
  // Convierte el arreglo de usuarios a una cadena JSON
  const usersStr = JSON.stringify(users);
  // Guarda la cadena en localStorage con la clave 'users'
  localStorage.setItem("users", usersStr);
}
