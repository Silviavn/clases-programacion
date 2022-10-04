const notas = [ 210, 5, 6, 15 ]
let contador  = 0
let sum = 0

for (let contador = 0; contador < notas.length; contador++ ) {
    if(notas[contador] > 10){ // se le añade la condicion de que sume solo los mayores de 10
        sum += notas[contador]
    }

}
console.log ("parece que ahora si",sum)

