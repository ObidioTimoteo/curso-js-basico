// 1. Escribe un comentario en una línea.

// Este es un comentario de una línea

// 2. Escribe un comentario en varias líneas.

/*  Este es un comentario
    que ocupa varias líneas
    amigo
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.

let myName = "Carlos" // String
let age = 47    // Number
let isStudent = true // Boolean
let undefinedValue // Undefined
let emptyValue = null // Null
let uniqueId = Symbol("id") // Symbol
let bigNumber = BigInt(1234567890123456789012345678901234567890) // BigInt

// 4. Imprime por consola el valor de todas las variables.
console.log("Me llamo " + myName);
console.log("Tengo " + age + " años");
console.log("¿Eres estudiante? " + isStudent);
console.log("Valor no asignado: " + undefinedValue);
console.log("Valor vacío: " + emptyValue);
console.log(uniqueId);
console.log("Número grande: " + bigNumber);

// 5. Imprime por consola el tipo de todas las variables.
console.log(typeof myName); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof undefinedValue); // "undefined"
console.log(typeof emptyValue); // "object" (null es un caso especial)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo.
myName = "Obidio"; // Cambiando el nombre
age = 30; // Cambiando la edad
isStudent = false; // Cambiando el estado de estudiante
undefinedValue = "Ahora tiene un valor"; // Asignando un valor
emptyValue = "Ahora también tiene un valor"; // Asignando un valor
uniqueId = Symbol("nuevo_id"); // Cambiando el símbolo
bigNumber = BigInt(987654321098765432109876543210987654321); // Cambiando el número grande

console.log("Me llamo " + myName);
console.log("Tengo " + age + " años");
console.log("¿Eres estudiante? " + isStudent);
console.log("Valor no asignado: " + undefinedValue);
console.log("Valor vacío: " + emptyValue);
console.log(uniqueId);
console.log("Número grande: " + bigNumber);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo.
myName = 348 // Cambiando el nombre
age = "Carlos" // Cambiando la edad
isStudent = 35 // Cambiando el estado de estudiante
undefinedValue = 56 // Asignando un valor
emptyValue = true // Asignando un valor
uniqueId = false // Cambiando el símbolo
bigNumber = "Obi" // Cambiando el número grande

console.log("Me llamo " + myName);
console.log("Tengo " + age + " años");
console.log("¿Eres estudiante? " + isStudent);
console.log("Valor no asignado: " + undefinedValue);
console.log("Valor vacío: " + emptyValue);
console.log(uniqueId);
console.log("Número grande: " + bigNumber);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const constString = "Constante de tipo String"; // String
const constNumber = 100; // Number
const constBoolean = false; // Boolean
const constUndefined = undefined; // Undefined
const constNull = null; // Null
const constSymbol = Symbol("const_id"); // Symbol
const constBigInt = BigInt(1234567890123456789012345678901234567890); // BigInt

// 9. A continuación, modifica los valores de las constantes.
// constString = "Nuevo valor"; // Esto daría un error porque no se puede reasignar una constante
// Las constantes no pueden ser reasignadas, por lo que esta parte del ejercicio no se puede completar.

// 10. Comenta las lí­neas que produzcan algún tipo de error al ejecutarse.