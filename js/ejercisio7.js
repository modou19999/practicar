// DOM

// 1. Obtener el elemento por su id
const element = document.getElementById("texto");

// 2. Cambiar el contenido del párrafo
element.textContent = "hola estoy practicando java script";

// 1. Obtener el botón por su id
const button = document.getElementById("miButton");

// 2. Agregar un evento de click
button.addEventListener("click", function () {
  console.log("¡Has hecho clic en el botón!");
});
