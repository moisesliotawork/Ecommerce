const userUno = {
  email: "adalith@gmail.com",
  password: "1234",
};

const userDos = {
  email: "ares@gmail.com",
  password: "1234",
};
const userTres = {
  email: "josefilardi@gmail.com",
  password: "1234",
};
const userCuatro = {
  email: "josue@gmail.com",
  password: "1234",
};
const userCinco = {
  email: "robertDoc@gmail.com",
  password: "1234",
};

const userSeis = {
  email: "naysojeda@gmail.com",
  password: "1234",
};

const userSiete = {
  email: "moisesliota@gmail.com",
  password: "1234",
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

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (validarCredenciales(email, password)) {
      window.location.href = "../pages/index.html";
    } else {
      console.log("Credenciales inválidas");
    }
  });

function validarCredenciales(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return true;
    }
  }
  return false;
}
