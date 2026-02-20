// ejercisio 3
// Crea una función que reciba un nombre y muestre

const name = "Julia";
function saludar(name) {
  console.log(`Hola ${name}`);
}
saludar(name); // llamar la function

// Declaraste la función correctamente
// Usaste un parámetro name
// Usaste template string para mostrar el mensaje
// Código limpio y claro

// Si quieres, también puedes definir la función como arrow function:
const saludar = (name) => console.log(`Hola ${name}`);
saludar(name);
