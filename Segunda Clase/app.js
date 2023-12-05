/*
Orden para instalar las dependecias y ejecutar los mòdulos
1 - Abrir la terminal en la carpeta donde queremos guardar el proyecto y ejecutar el comando: npm init -y
2 - En la terminal ejecutar el código npm install para instalar la direcciones necesarias
3 - Por cada paquete que queramos implementar debemos ejecutar el comando: npm install <nombre_paquete> 
*/

// Ejercicio
// Importamos la librerìa instalada
const Chance = require('chance');
//Creamos una instancia de Chance
const chance = Chance();
//Generamos los datos necesarios
const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();
//Mostramos los nombres necesarios
console.log('Nombre Aleatorio: ' + randomName);
console.log('Edad Aleatoria: ' + randomAge);
console.log('Mail Aleatorio: ' + randomEmail);
