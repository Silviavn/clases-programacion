const notas = [ 2, 4, 6, 8, 1, 3, 5, 7, ]
let sum = 0
for (let contador = 0; contador < notas.length; contador++ ) {
    if( notas[contador]  % 2 == 0 )
        sum += notas[contador]
    }


console.log("chanfles :c",sum)

