// 1. Concatena dos cadenas de texto.
let firstName = "Carlos";
let lastName = "Salvador";
let fullName = firstName + " " + lastName;
console.log("Nombre completo: " + fullName); // Imprime: Carlos Moure

// 2. Muestra la longitud de una cadena de texto.
console.log("Longitud del fullName: " + fullName.length); // Imprime la longitud del nombre completo

// 3. Muestra el primer y último carácter de un string.
console.log(fullName[0]); // Imprime el primer carácter
let longitud = fullName.length
console.log(fullName[(longitud-1)])
// Imprime el último carácter
console.log(fullName.charAt(longitud - 1)); // Otra forma de acceder al último carácter

// 4. Convierte a mayúsculas y minúsculas un string.
console.log(fullName.toUpperCase()); // Convierte a mayúsculas
console.log(fullName.toLowerCase()); // Convierte a minúsculas

// 5. Crea una cadena de texto en varias lí­neas.
let alineacion = `REAL ZARAGOZA
1. Cedrún
2. Belsué
3. Solana
4. Cáceres`
console.log(alineacion); // Imprime la cadena de texto en varias líneas

// 6. Interpola el valor de una variable en un string.
let age = 30;
console.log(`Me llamo ${firstName} y tengo ${age} años.`); // Usa template literals para interpolar variables

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
console.log(fullName.replace(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(fullName.includes("Carlos"))

// 9. Comprueba si dos strings son iguales.
console.log(firstName === lastName); // Compara dos strings para ver si son iguales

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(firstName.length == lastName.length)