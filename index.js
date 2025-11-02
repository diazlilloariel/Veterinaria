// index.js
// Importamos las funciones desde operaciones.js
const { registrar, leer } = require("./operaciones");

// Capturamos los argumentos de línea de comando
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

// Evaluamos qué operación ejecutar
if (operacion === "registrar") {
  registrar(nombre, edad, tipo, color, enfermedad);
}

if (operacion === "leer") {
  leer();
}
