const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

/*
El ejercicio que deberán realizar es el siguiente:

👉 Les dejamos como archivo adjunto la base para realizar el ejercicio, en la cual tendrán el html y css vacíos , una carpeta img y el index.js que tendrá el nuevo array de pizzas, en donde cada pizza tendrá una propiedad imagen además de las propiedades que tenía en el ejercicio anterior.

👉 Crear un archivo HTML que tenga un input de tipo "number", un botón y un contenedor en el cual renderizar el resultado de la búsqueda que se haga. 

👉 Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) mediante el evento "submit" si están usando un formulario o bien el evento "click" si quieren manejarlo desde el botón.

👉 Si el número ingresado en el input es valido(existe una pizza cuyo id coincida con el número ingresado en el input), se deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input. La card deberá contener mínimamente el nombre, imagen y y precio de la pizza (Estilizarlo con CSS 🎨) 

🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto del contenido de nuestro contenedor se deberá pisar por lo nuevo.

El input y el botón no se debén pisar, ya que debemos poder seguir haciendo busquedas.
*/

const pizzaImg = document.querySelector(".pizza-img");
const numberInput = document.querySelector(".pizza-number-input");
const form = document.querySelector(".search-pizza-form");
const errorField = document.querySelector("small");
const pizzaCard = document.querySelector(".pizza-card");

// Funciones

const isEmpty = (input) => {
  return !input.value.trim().length;
};

const idFound = (input) => {
  return pizzas.some((pizza) => pizza.id == parseInt(input.value.trim()));
};

const getPizzaId = (input) => {
  return pizzas.find((pizza) => {
    return pizza.id == parseInt(input.value.trim());
  });
};

const showError = (message) => {
  pizzaCard.innerHTML = `<h3>${message}</h3>`;
};

const isValid = () => {
  let valid = false;
  if (isEmpty(numberInput)) {
    showError("El campo no puede estar vacío");
    return;
  }
  if (!idFound(numberInput)) {
    showError("No se encontró una pizza con ese id");
    return;
  }
  valid = true;
  return valid;
};

const search = (e) => {
  e.preventDefault();
  if (isValid()) {
    const pizza = getPizzaId(numberInput);
    pizzaImg.style.opacity = "1";
    pizzaImg.src = pizza.imagen;
    pizzaCard.style.display = "block";
    pizzaCard.classList.remove("error");
    pizzaCard.innerHTML = `<h3>${pizza.nombre}</h3>
    <h3>$${pizza.precio}</h3>`;
  } else {
    pizzaCard.style.display = "block";
    pizzaCard.classList.add("error");
    pizzaImg.style.opacity = "0";
  }
};

// Funcion inicializadora

const init = () => {
  form.addEventListener("submit", search);
};
init();
