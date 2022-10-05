const isAdult = (age) => { // evaluacion la condicion de edad para verdadero o falso 
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
const logmessage = (age) => { // aqui se decreta el mensaje 
    if (isAdult(age)) {
        console.log("es mayor de edad")
    } else {
        console.log("es menor de edad")
    }
}
const transformAge = (age) => {// transformamos el mensaje de edad a si el mayor 
    return Number(age)
}

const userAge = prompt("Indicanos tu edad")

logmessage (transformAge(userAge))