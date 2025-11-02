// operaciones.js
// Importamos el módulo File System de Node.js
const fs = require("fs");

// Ruta del archivo JSON donde guardaremos las citas
const rutaArchivo = "./citas.json";

/**
 * Función para registrar una nueva cita
 * @param {string} nombre - Nombre del animal
 * @param {string} edad - Edad del animal
 * @param {string} tipo - Tipo de animal (perro, gato, etc.)
 * @param {string} color - Color del animal
 * @param {string} enfermedad - Enfermedad o motivo de atención
 */
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  // Leemos el archivo actual de citas
  const citas = JSON.parse(fs.readFileSync(rutaArchivo, "utf8"));

  // Creamos un nuevo objeto de cita
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  // Agregamos la nueva cita al arreglo existente
  citas.push(nuevaCita);

  // Guardamos el arreglo actualizado en el archivo JSON
  fs.writeFileSync(rutaArchivo, JSON.stringify(citas, null, 2));

  console.log("✅ Cita registrada con éxito:");
  console.log(nuevaCita);
};

/**
 * Función para leer y mostrar todas las citas registradas
 */
const leer = () => {
  const citas = JSON.parse(fs.readFileSync(rutaArchivo, "utf8"));
  console.log("📋 Listado de citas registradas:");
  console.log(citas);
};

// Exportamos las funciones para usarlas en index.js
module.exports = { registrar, leer };
