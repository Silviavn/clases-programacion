const numbers = [1, 2, 3, 4, 5, 6,]// que pueda agarrar cualquier arreglo e invertirlo

const invertArray = (array) => {
    for (let contador = array.length - 1; contador >= 0; contador--) {
        console.log(array[contador])
    }
}

invertArray(numbers)
invertArray([3, 2, 1])