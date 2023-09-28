console.clear()


// Método de HILL
const ALFABETO_ORIGINAL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
let matrizLlave = new Array(2);
matrizLlave[0] = new Array(2);
matrizLlave[1] = new Array(2);
matrizLlave[0][0] = 1
matrizLlave[0][1] = 2
matrizLlave[1][0] = 3
matrizLlave[1][1] = 4

console.log(matrizLlave)

function desplazar( q , alfabeto_ordenar) {
    const reordenar = Array.from(alfabeto_ordenar)
    for (let i = 0; i < q; i++) {
        reordenar.push(reordenar[0]);
        reordenar.shift();
    }
    return reordenar;
}

let ALFABETO_DESPLAZADO = desplazar(3,ALFABETO_ORIGINAL)

function cifrar(mensaje,inner_ALFABETO,inner_ALFABETO_DESPLAZADO){
    mensaje = mensaje.toUpperCase()
    let mensajeArreglo= Array.from(mensaje)
    let arregloFinal = []
    // console.log(mensajeArreglo)
    //console.log(mensajeArreglo)
    mensajeArreglo.forEach(currentElement => {
        let INDEX_ORIGINAL = inner_ALFABETO.indexOf(currentElement)
        arregloFinal.push(inner_ALFABETO_DESPLAZADO[INDEX_ORIGINAL]) 
         
     });
    let mensajeCifrado = arregloFinal.join('')
    return mensajeCifrado
}


let mensajeACifrar = "holaffffffffff"
// console.log(ALFABETO_ORIGINAL)
// console.log(ALFABETO_DESPLAZADO)
// let resultado = cifrar(mensajeACifrar,ALFABETO_ORIGINAL,ALFABETO_DESPLAZADO)
// console.log(mensajeACifrar)
// console.log(resultado)
// let segundoCifrado = cifrar(resultado,ALFABETO_ORIGINAL,ALFABETO_DESPLAZADO)
// console.log(segundoCifrado)