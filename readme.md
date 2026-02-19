/* esto son los seudos clase
> Hijo directo
(espacio)	Todos los descendientes (hijos, nietos…)
+	Primer hermano inmediato que sigue a otro
~	Todos los hermanos posteriores de un elemento
*	Todos los elementos
:first-child	Primer hijo de cualquier tipo
:last-child	    Último hijo de cualquier tipo
:nth-child(n)	Hijo número n, fórmula o patrón
:first-of-type	Primer hijo de un tipo específico
:last-of-type	Último hijo de un tipo específico
 */

/* 
 Atributos globales (sirven para casi todas las etiquetas)

id → identificador único
class → clase(s) para CSS o JS
style → estilos en línea
title → texto informativo (tooltip)
lang → idioma del contenido
hidden → oculta el elemento
data-* → datos personalizados
 */


/* 
📘 FLEXBOX — display: flex

🔹 Activar Flexbox
.container {
  display: flex;
}

🧭 Dirección (eje principal)
flex-direction: row;             fila (default)
flex-direction: row-reverse;     fila invertida 
flex-direction: column;         columna //Para que se inclinen en la columna 
flex-direction: column-reverse;  columna invertida 

🔄 Salto de línea
flex-wrap: nowrap;  todo en una línea (default) 
flex-wrap: wrap;    baja a otra línea 
flex-wrap: wrap-reverse;




📏 Alineación — eje principal
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between; // solo mueve al ultimo de la linea
justify-content: space-around;
justify-content: space-evenly;


📐 Alineación — eje secundario
align-items: stretch;   //default// 
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;

📦 Alinear múltiples filas (Solo funciona con wrap)
align-content: stretch;
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;

🧱 Propiedades de los items //ordenes//
.item {
  order: 1;           cambia el orden 
  flex-grow: 1;       cuánto crece 
  flex-shrink: 1;     cuánto se encoge 
  flex-basis: auto;   tamaño base 
}


Atajo:

flex: 1; //grow:1 shrink:1 basis:0//
flex: 0 0 200px;


Alineación individual:

align-self: center;
*/


/*📗 GRID — display: grid

🔹 Activar Grid
.container {
  display: grid;
}

🧱 Definir filas y columnas
grid-template-columns: 200px 1fr 1fr;
grid-template-rows: auto 1fr auto;


Unidad especial:
fr // fracción del espacio disponible //

🔁 Repetir columnas/filas
grid-template-columns: repeat(3, 1fr);

📏 Espacios (gap)
gap: 1rem;
row-gap: 1rem;
column-gap: 2rem;

📐 Alineación del grid completo
justify-content: start;
justify-content: end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

align-content: start;
align-content: end;
align-content: center;

📦 Alineación de items
justify-items: stretch; // default //
justify-items: start;
justify-items: end;
justify-items: center;

align-items: stretch;  default //
align-items: start;
align-items: end;
align-items: center;

Item individual:
align-self: center;
justify-self: center;

🧭 Posicionar items
.item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}

🗺️ Áreas (muy importante)
.container {
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }


¿Cuándo usar cada uno?

Flexbox → una dirección (fila o columna)
Grid → dos dimensiones (filas + columnas)

📌 Flexbox = alinear elementos
📌 Grid = construir layout completo
