// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let userName = "Timoteo"

if (userName == "Carlos") {
    console.log("Tú nombre es " + userName)
} else console.log("Tú nombre no es Carlos")

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.
let password = "1234"
let passwordInput = "45"

if (passwordInput === password) {
    console.log("Contraseña correcta")
} else {
    console.log("Contraseña incorrecta")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
let num = -5
const message = num == 0 ? "El número es 0" : (num > 0 ? "El número es positivo" : "El número es negativo")
console.log(message)

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let puedeVotar
let annosFaltan
let age = 16

if (age < 18) {
    console.log(`No puedes votar y te faltan ${18 - age} años`)
} else console.log ("Puedes votar")

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.
let isAdult = age < 18 ? "menor" : "adulto"
console.log(isAdult)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let mesNumero = 5
let mes

if (mesNumero == 1) {
    mes = "ENERO"
} else if (mesNumero == 2) {
    mes = "FEBRERO"
} else if (mesNumero == 3) {
    mes = "MARZO"
} else if (mesNumero == 4) {
    mes = "ABRIL"
} else if (mesNumero == 5) {
    mes = "MAYO"
} else if (mesNumero == 6) {
    mes = "JUNIO"
} else if (mesNumero == 7) {
    mes = "JULIO"
} else if (mesNumero == 8) {
    mes = "AGOSTO"
} else if (mesNumero == 9) {
    mes = "SEPTIEMBRE"
} else if (mesNumero == 10) {
    mes = "OCTUBRE"
} else if (mesNumero == 11) {
    mes = "NOVIEMBRE"
} else if (mesNumero == 12) {
    mes = "DICIEMBRE"
} else {
    mes = "Número incorrecto"
}

console.log(mes)

// 7. Muestra el número de dí­as que tiene un mes dependiendo de la variable del ejercicio anterior.
if (mes == "ENERO" || mes == "MARZO" || mes == "MAYO" || mes == "JULIO" || mes == "AGOSTO" || mes == "OCTUBRE" || mes == "DICIEMBRE") {
    console.log (`El mes de ${mes} tiene 31 días`)
} else if (mes == "FEBRERO") {
    console.log (`El mes de ${mes} tiene 28 días`)
} else {
    console.log (`El mes de ${mes} tiene 30 días`)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let idioma = "Francés"

switch (idioma) {
    case "Español":
        console.log ("Hola")
        break
    case "Inglés":
        console.log ("Hello")
        break
    case "Francés":
        console.log ("Bon jour")
        break
    case "Alemán":
        console.log ("Alo")
        break
    default:
        console.log("Idioma no reconocido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
switch (mesNumero) {
    case 1:
        console.log ("ENERO")
        break
    case 2:
        console.log ("FEBRERO")
        break
    case 3:
        console.log ("MARZO")
        break
    case 4:
        console.log ("ABRIL")
        break
    case 5:
        console.log ("MAYO")
        break
    case 6:
        console.log ("JUNIO")
        break
    case 7:
        console.log ("JULIO")
        break
    case 8:
        console.log ("AGOSTO")
        break
    case 9:
        console.log ("SEPTIEMBRE")
        break
    case 10:
        console.log ("OCTUBRE")
        break
    case 11:
        console.log ("NOVIEMBRE")
        break
    case 12:
        console.log ("DICIEMBRE")
        break
    default:
        console.log("Número de mes incorrecto")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
switch (mesNumero) {
    case 1:
        console.log ("31 DÍAS")
        break
    case 2:
        console.log ("28 DÍAS")
        break
    case 3:
        console.log ("31 DÍAS")
        break
    case 4:
        console.log ("30 DÍAS")
        break
    case 5:
        console.log ("31 DÍAS")
        break
    case 6:
        console.log ("30 DÍAS")
        break
    case 7:
        console.log ("31 DÍAS")
        break
    case 8:
        console.log ("31 DÍAS")
        break
    case 9:
        console.log ("30 DÍAS")
        break
    case 10:
        console.log ("31 DÍAS")
        break
    case 11:
        console.log ("30 DÍAS")
        break
    case 12:
        console.log ("31 DÍAS")
        break
    default:
        console.log("Número de mes incorrecto")
}