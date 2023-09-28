console.clear()

//ALUMNO: MIGUEL ANGEL CRISPIN CABRERA

//CIFRADO AFIN
//C=(ax+b) mod m

//a: Factor de decimación
//b: Factor de desplazamiento
//x: Posicion del alfabeto
//m: Tamaño del alfabeto

//Reglas
//1: "a" tiene que ser coprimo de "m" (o primo relativo)
// si a = 5 y 26 son coprimos entre si

let mensajeACifrar = "If, for some reason, we make some big mistake and IBM wins, my personal feeling is that we are going to enter a computer Dark Ages for about twenty years"
let factorDecimacion = 5
let desplazamiento = 8

function cifradoAfin(mensaje,decimacion,desplazamiento){
    const ALFABETO_INGLES = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const TAMAÑO_ALFABETO = ALFABETO_INGLES.length
    let arregloFinal = []
    //Se crea un arreglo separando las letras, quitando espacios y comas (para este texto en especifico, mejorar programacion para utilizar solo letras)
    let arregloClaro = (Array.from(mensaje)).filter(element => ((element != " ") && (element != ",")))
    // console.log(arregloClaro)
    function calcularCriptograma(a,b,x,m){
        //CIFRADO AFIN
        //C=(ax+b) mod m
        return ((a*x)+b) % m
    }
    arregloClaro.forEach((element) => {
        let indiceAlfabeto = ALFABETO_INGLES.indexOf(element.toUpperCase())
        let resultado = ALFABETO_INGLES[(calcularCriptograma(decimacion,desplazamiento,indiceAlfabeto,TAMAÑO_ALFABETO))]
        arregloFinal.push(resultado)
    });
    arregloFinal = arregloFinal.join('')
    return arregloFinal
}

let resultado = cifradoAfin(mensajeACifrar,factorDecimacion,desplazamiento)
console.log(resultado)

