var notaTheRock = 1
var notaAprovado = 7

if (notaTheRock >= notaAprovado) {
    console.log("The Rock aprovado")
}
else {
    console.log("REPROVADO")
}

// impar ou par

// se a sobra da divisão do número por 2 for 1 esse número é impar
// se a sobra da divisão do número por 2 for 0 é par

var imparPar = 10

if (imparPar % 2 == 1) {
    console.log("é impar")
}
else {
    console.log("é par")
}

//validação encadeada

// primeira validação > se é par
// segunda validação > numero maior que 10

// o numero é par e maior que 10
// o numero é par porem é menor que 10

var imparPar2 = 12
if (imparPar2 % 2 == 1) {
    console.log("é impar")
}
else {
    console.log("é par")
    if (imparPar2 > 10) {
        console.log('o numero é par e maior que 10')
    } else {
        console.log("o numero é par e menor que 10")
    }
}

// operador ternario
imparPar2 % 2 == 1 ? console.log("é impar") : console.log("é par")


//switch
// se é maior que 7 apresenta "aprovado"
// se é menor que 7 apresenta "reprovado"
// se está entre 7 e 5 "aprovado por conselho"

if (4 > 7) {
    console.log("aprovado")
} else if (4 < 6.9 && 4 > 5) {
    console.log("Aprovado por conselho")
} else {
    consoloe.log("reprovado")
}


var notaMarcos = 5
switch (notaMarcos > 7) {
    case true:
        console.log("Aprovado")
        break;
    case false:
        console.log("Reprovado")
        break;