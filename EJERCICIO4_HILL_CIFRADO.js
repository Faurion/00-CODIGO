console.clear()

//ALUMNO: MIGUEL ANGEL CRISPIN CABRERA
// Método de HILL

let mensajeACifrar = "CODIGO"
console.log("Mensaje: "+mensajeACifrar)


// const ALFABETO_ESPAÑOL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const ALFABETO_ESPAÑOL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(`Tamaño Alfabeto ${ALFABETO_ESPAÑOL.length}`)
console.log("")

let matrizLlave = [
    [5, 17, 20],
    [9, 23, 3],
    [2, 11, 13]
]

console.log("Matriz Llave")
console.table(matrizLlave)

function matrizarMensaje(mensajeAMatrizar) {
    //SE CONVIERTE EL MENSAJE ORIGINAL A UN ARREGLO DE CARÁTERES, SIN ESPACIOS NI COMILLAS
    let matriz = (Array.from(mensajeAMatrizar.toUpperCase())).filter(element => ((element != " ") && (element != ",")))
    // imprimirMatriz(matrizGeneral,"MatrizMatriz")
    return matriz
}


let arregloUnidimensional = matrizarMensaje(mensajeACifrar)
console.log("")
console.log("Matriz Unidimensional")
console.log(arregloUnidimensional)
// console.table(arregloUnidimensional)

function obtenerValorAlfabeto(arregloLetras, alfabeto) {
    let indicesAlfabeto = []
    arregloLetras.forEach(element => {
        indicesAlfabeto.push(alfabeto.indexOf(element))
    })
    return indicesAlfabeto
}

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
console.log("Matriz segmentada")
console.table(matrizSeparada)


function multiplicar(llave, matrizSegmentada) {
    var result = [];
    let sumar1=0;
    let sumar2=0;
    let sumar3=0
    matrizSegmentada.forEach(element  => {
        sumar1 = element[0]*llave[0][0] + element[1]*llave[0][1] + element[2]*llave[0][2]
        sumar2 = element[0]*llave[1][0] + element[1]*llave[1][1] + element[2]*llave[1][2]
        sumar3 = element[0]*llave[2][0] + element[1]*llave[2][1] + element[2]*llave[2][2]
        sumar1 > 0 ? result.push(sumar1) : ""
        sumar2 > 0 ? result.push(sumar2) : ""
        sumar3 > 0 ? result.push(sumar3) : ""

    })
    return result;
}


let matrizMultiplicada = multiplicar(matrizLlave,matrizSeparada)
console.log("")
console.log("Multiplicacion MatrizLlave*MatrizSegmentada")
console.table(matrizMultiplicada)

function reemplazar (arregloCalculado){
    let arrayCifrado = []
    arregloCalculado.forEach(element => {
        let mod = element % ALFABETO_ESPAÑOL.length
        arrayCifrado.push(ALFABETO_ESPAÑOL[mod])
    })
    arrayCifrado = arrayCifrado.join("")
    return arrayCifrado
}


let stringCifrado = reemplazar(matrizMultiplicada)
console.log("")
console.log("Cifrado")
console.log(stringCifrado)










