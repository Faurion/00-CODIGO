console.clear()

//ALUMNO: MIGUEL ANGEL CRISPIN CABRERA
function descifradoCesar(mensajeCifrado,pista){
    let mensajeArreglo= Array.from(mensajeCifrado.trim())
    mensajeArreglo = mensajeArreglo.filter(element => element != " ")
    const ALFABETO_ORIGINAL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    let arregloFinal = []

    //SEPARAR LA PISTA EN TAMAÑOS CON INDICES
    let objetivos = mensajeCifrado.split(" ")
    // console.log(objetivos)
    //BUSCAR FRASE QUE TENGA LA MISMA LONGITUD
    let buscar = objetivos.filter(element => element.length == pista.length)
    // console.log(buscar)
    //DETERMINAR DIFERENCIA EN EL ALFABETO DE LA PRIMER LETRA DEL ELEMENTO FILTRADO Y LA PISTA
    var diferencia = ALFABETO_ORIGINAL.indexOf(buscar[0][0]) - ALFABETO_ORIGINAL.indexOf(pista[0])
    // console.log(diferencia)
    function desplazar( q , alfabeto_ordenar) {
        const reordenar = Array.from(alfabeto_ordenar)
        for (let i = 0; i < q; i++) {
            reordenar.push(reordenar[0]);
            reordenar.shift();
        }
        return reordenar;
    }
    //OBTENER ALFABETO DESPLAZADO SEGÚN LA DIFERENCIA CALCULADA
     let ALFABETO_DESPLAZADO = desplazar(diferencia,ALFABETO_ORIGINAL)
    //OBTENER EL MENSAJE ORIGINAL UTILIZANDO LAS POSICIONES DEL ALFABETO DESPLAZADO AL ALFABETO ORIGINAL
    mensajeArreglo.forEach(currentElement => {
         let INDEX_ORIGINAL = ALFABETO_DESPLAZADO.indexOf(currentElement)
         arregloFinal.push(ALFABETO_ORIGINAL[INDEX_ORIGINAL])
      });

     let mensajeDesfrado = arregloFinal.join('')
    return mensajeDesfrado
}


let resultado = descifradoCesar("QYI QKMÑ EW LYWRDY NRK","HACE")
console.log(resultado)

