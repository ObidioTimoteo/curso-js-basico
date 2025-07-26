// 1. Crea una variable para cada operación aritmética.
let num1 = 15;
let num2 = 4;
let suma = num1 + num2; // Suma
let resta = num1 - num2; // Resta
let multiplicacion = num1 * num2; // Multiplicación
let division = num1 / num2; // División
let modulo = num1 % num2; // Módulo (resto de la división)
let potencia = num1 ** num2; // Potencia (num1 elevado a num2)
num1++; // Incremento (postfijo)
num2--; // Decremento (postfijo)
console.log("Operaciones aritméticas:");
console.log("----------------------------");
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);
console.log("Potencia: " + potencia);
console.log("Incremento: " + (num1)); // Incremento (postfijo)
console.log("Decremento: " + (num2)); // Decremento (

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.
console.log("Operadores de asignación:");
console.log("----------------------------");
let num3 = 20;
console.log("Valor inicial: " + num3);
num3 += 5; // Suma y asigna (num3 = num3 + 5)
console.log("Después de += 5: " + num3);
num3 -= 2; // Resta y asigna (num3 = num3 - 2)
console.log("Después de -= 2: " + num3);
num3 *= 3; // Multiplica y asigna (num3 = num3 * 3)
console.log("Después de *= 3: " + num3);
num3 /= 4; // Divide y asigna (num3 = num3 / 4)
console.log("Después de /= 4: " + num3);
num3 %= 3; // Módulo y asigna (num3 = num3 % 3)
console.log("Después de %= 3: " + num3);
num3 **= 2; // Potencia y asigna (num3 = num3 ** 2)
console.log("Después de **= 2: " + num3);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.
console.log("Operadores de comparación:");
console.log("----------------------------");
console.log(`Num1 = ${num1}`);
console.log(`Num2 = ${num2}`);
console.log("num1 > num2: " + (num1 > num2)); // Mayor que
console.log("num1 >= num2: " + (num1 >= num2)); // Mayor o igual que
console.log("num2 < num1: " + (num2 < num1)); // Menor que
console.log("num1 == 16(string) : " + (num1 == "16")); // == que
console.log("16(number) == 16(string) : " + (16 == "16")); // == que

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.
console.log("num2 > num1: " + (num2 > num1)); // Mayor que
console.log("num2 >= num1: " + (num2 >= num1)); // Mayor o igual que
console.log("num1 < num2: " + (num1 < num2)); // Menor que
console.log("num1 === 16(string) : " + (num1 === "16")); // === que
console.log("num1 !== 16(number) : " + (num1 !== 16)); // !== que

// 5. Utiliza el operador lógico and.
console.log("Operadores lógicos:");
console.log("----------------------------");
console.log(`Num1 = ${num1}`);
console.log(`Num2 = ${num2}`);
console.log(`Num2 = ${num3}`);
let num4 = 20
console.log(`Num2 = ${num4}`);
console.log("num1 > num2 && num3 < num4: " + (num1 > num2 && num3 < num4)); // AND
console.log("num1 < num2 && num3 > num4: " + (num1 < num2 && num3 > num4)); // AND falso

// 6. Utiliza el operador lógico or.
console.log("num1 > num2 || num3 < num4: " + (num1 > num2 || num3 < num4)); // OR
console.log("num1 < num2 || num3 > num4: " + (num1 < num2 || num3 > num4)); // OR falso

// 7. Combina ambos operadores lógicos.
console.log("num1 > num2 && (num3 < num4 || num1 < num2): " + (num1 > num2 && (num3 < num4 || num1 < num2))); // AND con OR

// 8. Añade alguna negación.
console.log("!(num1 < num2): " + !(num1 < num2)); // Negación de una comparación

// 9. Utiliza el operador ternario.
let isCat = true;
isCat ? console.log("Es un gato") : console.log("No es un gato"); // Operador ternario

// 10. Combina operadores aritméticos, de comparación y lógicas.
let result = (num1 + num2 > num3) && (num4 < num3) ? "Resultado verdadero" : "Resultado falso";
console.log("Resultado de la combinación: " + result); // Resultado de la combinación