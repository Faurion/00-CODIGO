console.clear()

//ALUMNO: MIGUEL ANGEL CRISPIN CABRERA
// Método de HILL

import { create, all } from 'mathjs'

const config = {
//   matrix: 'Array' // Choose 'Matrix' (default) or 'Array'
    number: 'Fraction'
}
const math = create(all, config)


let mensajeDescifrar = "ZFMLUHJHGLOCJDJZMPIEZ"
console.log("Mensaje: "+mensajeDescifrar)


const ALFABETO_ESPAÑOL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// const ALFABETO_ESPAÑOL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(`Tamaño Alfabeto ${ALFABETO_ESPAÑOL.length}`)
console.log("")

let k = [
    [2, 11, 0],
    [22, 4, 4],
    [9, 4, 12]
]

console.log("Matriz llave")
console.table(k)
let determinanteClave = math.det(k)
// console.log(determinanteClave)

console.log("Determinante de Llave")
let moddd= math.det(determinanteClave) % 27
console.log(moddd)

let matrizCofactores = [[],[],[]]

 matrizCofactores[0].push((+1)*((k[1][1] * k[2][2]) - (k[1][2] * k[2][1])))
 matrizCofactores[0].push((-1)*((k[1][0] * k[2][2]) - (k[1][2] * k[2][0])))
 matrizCofactores[0].push((+1)*((k[1][0] * k[2][1]) - (k[1][1] * k[2][0])))

 matrizCofactores[1].push((-1)*((k[0][1] * k[2][2]) - (k[0][2] * k[2][1])))
 matrizCofactores[1].push((+1)*((k[0][0] * k[2][2]) - (k[0][2] * k[2][0])))
 matrizCofactores[1].push((-1)*((k[0][0] * k[2][1]) - (k[0][1] * k[2][0])))

 matrizCofactores[2].push((+1)*((k[0][1] * k[1][2]) - (k[0][2] * k[1][1])))
 matrizCofactores[2].push((-1)*((k[0][0] * k[1][2]) - (k[0][2] * k[1][0])))
 matrizCofactores[2].push((+1)*((k[0][0] * k[1][1]) - (k[0][1] * k[1][0])))

 console.log("")
console.log("Matriz Cofactores")
console.table(matrizCofactores)

console.log("Multiplicacion k-1 (-2)")
let k1 = math.multiply(matrizCofactores,-2)
console.table(k1)

console.log("Matriz de descifrado resultante: ")
let final = math.mod(k1,(ALFABETO_ESPAÑOL.length))
console.table(final)




function obtenerValorAlfabeto(arregloLetras, alfabeto) {
    let indicesAlfabeto = []
    arregloLetras.forEach(element => {
        indicesAlfabeto.push(alfabeto.indexOf(element))
    })
    return indicesAlfabeto
}

let arregloUnidimensional = mensajeDescifrar.split("")
let valoresAlfabeto = obtenerValorAlfabeto(arregloUnidimensional, ALFABETO_ESPAÑOL)
console.log("")
console.log("Reemplazo de Indices")
console.log(valoresAlfabeto)
// console.table(valoresAlfabeto)

function separarMatriz(lista, limiteSubElementos) {
    //Separar matriz unidimensional, en bidimensional con parámetro de limite en cada subelemento
    var matrix = [], i, k;
    for (i = 0, k = -1; i < lista.length; i++) {
        if (i % limiteSubElementos === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(lista[i]);
    }
    return matrix;
}

let matrizSeparada = separarMatriz(valoresAlfabeto, 3);
console.log("")
console.log("Matriz cifrada")
console.table(matrizSeparada)

let mensajeTernas = []
matrizSeparada.forEach(element => {
    //multiplicacion de cada terna por la matriz de descifrado
    let result = math.multiply(element,final)
    mensajeTernas.push(result)
})

console.log("Ternas * Matriz de Descifrado")
console.table(mensajeTernas)

console.log("Calculo de %")
let modTernas = math.mod(mensajeTernas,(ALFABETO_ESPAÑOL.length))
console.table(modTernas)


console.log("Reemplazo de Indices del Alfabeto")
let arregloFinal = []
modTernas.forEach(element => {
    element.forEach(subElement => {
        let letra = ALFABETO_ESPAÑOL[subElement]
        arregloFinal.push(letra)
    })
})

console.log(arregloFinal)

let stringFinal = arregloFinal.join("")
console.log("Mensaje Descifrado:" + stringFinal)