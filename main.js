const onSubmit = () => {

let age = Number(document.getElementById ("age").value)
let height = Number(document.getElementById("height").value)
let allowed = Boolean(document.getElementById("allowed").value)

if (age>=18) {
    document.write(" si puede entrar al parque")
} else {
    if(age>=16&& age<18&& height>=1.70){
        document.write(" si puede entrar al parque")
    } else if(age>=16&& height<=1.50) {
        document.write(" no puede entrar al parque")

    } else {
        document.write("no puede hacer ingreso al parque")

    }
}

}