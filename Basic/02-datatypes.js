// PRIMITIVOS
// Representan un único valor y no tienen propiedades ni métodos, ni funciones asociadas.
// Son inmutables, lo que significa que no pueden ser modificados una vez creados.

// String
let myName = "Carlos";
let email = 'csg@csg.com'
console.log("Me llamo " + myName + " y mi email es " + email);
console.log(`Me llamo ${myName} y mi email es ${email}`); // Usando template literals

// Number
let age = 30; // Entero
let height = 1.75; // Decimal

// Boolean
let isStudent = false;
if (isStudent) {
    console.log("Eres estudiante");
} else {
    console.log("No eres estudiante");
}

// Undefined
// Una variable declarada pero no inicializada tiene el valor undefined
let notAssigned;
console.log(notAssigned); // Imprime undefined

// Null
// Representa la ausencia intencionada de valor
let emptyValue = null;
console.log(emptyValue); // Imprime null

// Symbol
// Un valor único e inmutable, útil para identificadores únicos
let uniqueId = Symbol("id");
console.log(uniqueId); // Imprime un símbolo único

// BigInt
// Representa enteros grandes, más allá del límite de Number
let bigNumber = BigInt(1234567890123456789012345678901234567890);
let anotherBigNumber = 1234567890123456789012345678901234567890n; // Sufijo 'n' para BigInt
console.log(anotherBigNumber); // Imprime otro BigInt
console.log(bigNumber); // Imprime un BigInt

// Tipos de datos primitivos en JavaScript
console.log(typeof myName); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof notAssigned); // "undefined"
console.log(typeof emptyValue); // "object" (null es un caso especial)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"
console.log(typeof anotherBigNumber); // "bigint"