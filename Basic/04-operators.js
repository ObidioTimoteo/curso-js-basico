// OPERADORES

// Operadores aritméticos
let a = 10;
let b = 5;
let suma = a + b; // Suma
let resta = a - b; // Resta
let multiplicacion = a * b; // Multiplicación
let division = a / b; // División
let modulo = a % b; // Módulo (resto de la división)
let potencia = a ** b; // Potencia (a elevado a b)
a++; // Incremento (postfijo)
b--; // Decremento (postfijo)
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log(modulo);
console.log("Potencia: " + potencia);
console.log(a);
console.log(b);

// Operadores de asignación
let myVariable = 2;
console.log("Valor inicial: " + myVariable);
myVariable += 3; // Suma y asigna (myVariable = myVariable + 3)
console.log("Después de += 3: " + myVariable);
myVariable -= 1; // Resta y asigna (myVariable = myVariable - 1)
console.log("Después de -= 1: " + myVariable);
myVariable *= 2; // Multiplica y asigna (myVariable = myVariable * 2)
console.log("Después de *= 2: " + myVariable);
myVariable /= 4; // Divide y asigna (myVariable = myVariable / 4)
console.log("Después de /= 4: " + myVariable);
myVariable %= 3; // Módulo y asigna (myVariable = myVariable % 3)
console.log("Después de %= 3: " + myVariable);
myVariable **= 2; // Potencia y asigna (myVariable = myVariable ** 2)
console.log("Después de **= 2: " + myVariable);

// Operadores de comparación
a = 10;
b = 5;
console.log("Comparaciones:");
console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que
console.log(a == b); // Igualdad (valor)
console.log(a != b); // Desigualdad (valor)
console.log(a === b); // Igualdad estricta (valor y tipo)
console.log(a !== b); // Desigualdad estricta (valor y tipo)

let c = "10";
console.log(a == c); // true, porque compara solo el valor
console.log(a === c); // false, porque compara valor y tipo
console.log(a != c); // false, porque compara solo el valor
console.log(a !== c); // true, porque compara valor y tipo

// Operadores lógicos
let x = true;
let y = false;
console.log("Operadores lógicos:");
console.log(x && y); // AND lógico (true si ambos son true)
console.log(x || y); // OR lógico (true si al menos uno es true)
console.log(!x); // NOT lógico (invierte el valor de x)
console.log(!y); // NOT lógico (invierte el valor de y)
 
// Operadores ternarios
let edad = 18;
(edad >= 18) ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")
