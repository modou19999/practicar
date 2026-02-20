# ejemplos

1. VARIABLES (lo básico) Qué debes saber
   let → cambia su valor
   const → no cambia

   Tipos básicos:
   string → "Juan"
   number → 20
   boolean → true false null undefined

let nombre = "Juan";
const edad = 20;
let activo = true;

2. FUNCIONES (lo básico) Qué debes saber
   Una función es un bloque de código reutilizable.

   function saludar() {
   console.log("Hola");
   }
   Con parámetros:
   function sumar(a, b) {
   return a + b;
   }

3. ArrayARRAYS (lo básico) Qué debes saber
   Un array guarda varios valores.
   let números = [1, 2, 3, 4];
   Acceder:
   números[0]; // 1

Métodos básicos:
push() → agregar
pop() → eliminar último
length → tamaño

4. 4. DOM (lo básico) Qué debes saber
      El DOM permite modificar el HTML con JS.

Seleccionar:
document.getElementById("id");
document.querySelector(".clase");

Modificar texto:
elemento.textContent = "Nuevo texto";

Si en vez de "textContent" usaras "innerHTML", podrías incluso insertar HTML dentro del "<p>"
