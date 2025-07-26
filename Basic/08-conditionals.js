// Condicionales

// if, else if, else
let age = 10

if (age >= 18) {
    console.log("Eres mayor de edad");
}   else if (age >= 13) {
    console.log("Eres un adolescente");
}   else {
    console.log("Eres un niño");
}

// Operador ternario
age >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")
age >= 18 ? console.log("Eres mayor de edad") : (age < 10 ? console.log("Eres un niño") : console.log("Eres un adolescente"))

const message = age >= 18 ? "Eres mayor de edad" : (age < 10 ? "Eres un niño" : age)
console.log(message)

// switch
let day = 5
let dayName = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
let today

switch (day) {
    case 0:
        today = dayName[0]
        break;
    case 1:
        today = dayName[1]
        break;
    case 2:
        today = dayName[2]
        break;
    case 3:
        today = dayName[3]
        break;
    case 4:
        today = dayName[4]
        break;
    case 5: 
        today = dayName[5]
        break;
    case 6:
        today = dayName[6]
        break;
    default:
        today = "Día no válido"
}

console.log(`Hoy es ${today}`); // Imprime: Hoy es Sábado