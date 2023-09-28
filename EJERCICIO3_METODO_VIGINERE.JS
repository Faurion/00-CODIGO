console.clear()

//ALUMNO: MIGUEL ANGEL CRISPIN CABRERA

//CIFRADO POR METODO VIGINERE
//C=(x+a) mod m

//a: Indice de clave en el alfabeto
//x: Indice de letra del alfabeto
//m: Tamaño del alfabeto

function cifradoViginere(mensaje,claveCifrado){
    const ALFABETO_INGLES = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const TAMAÑO_ALFABETO = ALFABETO_INGLES.length
    let arregloFinal = []
    //Se crea un arreglo separando las letras, quitando espacios y comas (para este texto en especifico, mejorar programacion para utilizar solo letras)
    let arregloClaro = (Array.from(mensaje)).filter(element => ((element != " ") && (element != ",")))
    // console.log(arregloClaro)
    function calcularCriptograma(x,a,m){
        // console.log(a,m,x)
        //CIFRADO AFIN
        //C=(ax+b) mod m
        let valorModulo = (x+a) % m
        // console.log(valorModulo)
        return valorModulo
    }
    let tamaño1=arregloClaro.length
    let tamaño2=claveCifrado.length
    let repeticion = Math.ceil(tamaño1/tamaño2)
    // console.log(tamaño1,tamaño2,repeticion)
    let ClaveRepetida = (claveCifrado.repeat(repeticion)).substring(0,tamaño1)
    let claveIgualada = Array.from(ClaveRepetida)
    // console.log(claveIgualada)

    arregloClaro.forEach((element,index) => {
        let indiceAlfabeto = ALFABETO_INGLES.indexOf(element.toUpperCase())
        let indiceAlfabetoClave =  ALFABETO_INGLES.indexOf(claveIgualada[index].toUpperCase())
        // console.log(`${indiceAlfabeto} y ${indiceAlfabetoClave} y ${TAMAÑO_ALFABETO}`)
        let resultado = ALFABETO_INGLES[(calcularCriptograma(indiceAlfabeto,indiceAlfabetoClave,TAMAÑO_ALFABETO))]
        arregloFinal.push(resultado)
    });
    // console.log(arregloFinal)
    arregloFinal = arregloFinal.join('')
    return arregloFinal
}

let mensajeACifrar = "The people work better when they know what the goal is and why"
// let mensajeACifrar = "Hermoso"
let clave = "Cielo"
let resultado = cifradoViginere(mensajeACifrar,clave)
console.log(resultado)


