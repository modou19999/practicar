// array

// 1. Crear un array con 3 frutas
let frutas = ["manzana", "pera", "melon"];

// 2. Agregar una fruta más
frutas.push("mango");

// 3. Mostrar cuántas frutas hay
console.log(`Hay ${frutas.length} frutas.`); // Salida: Hay 4 frutas.

// (Opcional) Mostrar todas las frutas
console.log(frutas); // ["manzana", "pera", "melon", "mango"]

// ["manzana", "pera", "melon"] → array con 3 elementos.
// frutas.push("mango") → agrega "mango" al final del array.
// frutas.length → devuelve el número total de elementos en el array.



// 1. Crear un array con 5 números
let números = [10, 20, 30, 40, 50];

// 2. Recorrer el array con un for
for (let i = 0; i < números.length; i++) {
  console.log(números[i]); // Muestra cada número en la consola
}
//  Explicación

// let números = [10, 20, 30, 40, 50] → array con 5 números.

// for (let i = 0; i < números.length; i++) → recorre los índices del array del 0 al 4.

// números[i] → accede al elemento en la posición i.

// console.log(números[i]) → imprime cada número en la consola.