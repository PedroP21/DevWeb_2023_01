const valor = [17, 43, 8, 4, 97, 56, 29]

valor.forEach(parImpar)

function parImpar(number) {
    if(number % 2 === 0) {
        console.log(number + " Número par")
    } else {

        console.log(number + " Número impar")
    }
}

// exercicio 2 ////////////
const valor2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61]

let verificar = valor2.filter((number) => {
    if(number <= 80)
    return number >= 20
})

console.log(verificar)