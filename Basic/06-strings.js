// Strings

// Concatenación
let myName = "Carlos"; // String
let gretting = "Hola, " + myName + "!"; // Concatenación de strings
console.log(gretting); // Imprime: Hola, Carlos!

// Longitud
console.log(gretting.length); // Imprime la longitud del string

// Acceso a caracteres
console.log(gretting[0]); // Imprime el primer carácter del string
console.log(gretting.charAt(1)); // Imprime el segundo carácter del string

// Métodos de strings
console.log(gretting.toUpperCase()); // Convierte el string a mayúsculas
console.log(gretting.toLowerCase()); // Convierte el string a minúsculas
console.log(gretting.indexOf("Carlos")); // Encuentra la posición de "Carlos" en el string
console.log(gretting.includes("Car")); // Comprueba si el string contiene "Car"
console.log(gretting.includes("car")); // Comprueba si el string contiene "car" // Sensible a mayúsculas y minúsculas
console.log(gretting.slice(0, 7)); // Extrae una parte del string desde el índice 0 hasta el 7
console.log(gretting.replace("Carlos", "Obidio")); // Reemplaza "Carlos" por "Obidio"
console.log(gretting.split(", ")); // Divide el string en un array usando ", "

// Plantillas literales (Template literals)
let message = `1. Cristian
2. Cafú
3. Brehme
4. Piqué
5. Milito
6. Rijkaard
7. Kily
8. Señor
9. Milosevic
10. Villa
11. Savio`

console.log(message); // Imprime el mensaje con saltos de línea
console.log("Hola, " + myName + "! ¿Cómo estás?"); // Concatenación tradicional
console.log(`Hola, ${myName}! ¿Cómo estás?`); // Usa template literals para interpolar variables