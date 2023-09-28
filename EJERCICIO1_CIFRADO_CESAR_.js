console.clear()

//ALUMNO: MIGUEL ANGEL CRISPIN CABRERA

function cifradoCesar(mensaje,DESPLAZAMIENTO){
    mensaje = mensaje.toUpperCase()
    let mensajeArreglo= Array.from(mensaje)
    let arregloFinal = []
    const ALFABETO_ORIGINAL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let ALFABETO_DESPLAZADO = desplazar(DESPLAZAMIENTO,ALFABETO_ORIGINAL)
    function desplazar( q , alfabeto_ordenar) {
        const reordenar = Array.from(alfabeto_ordenar)
        for (let i = 0; i < q; i++) {
            reordenar.push(reordenar[0]);
            reordenar.shift();
        }
        return reordenar;
    }
    mensajeArreglo.forEach(currentElement => {
        let INDEX_ORIGINAL = ALFABETO_ORIGINAL.indexOf(currentElement)
        arregloFinal.push(ALFABETO_DESPLAZADO[INDEX_ORIGINAL])
     });
    //  console.log(ALFABETO_DESPLAZADO)
    let mensajeCifrado = arregloFinal.join('')
    return mensajeCifrado
}


let resultado = cifradoCesar("MIGUELCRISPIN",2)
console.log(resultado)

