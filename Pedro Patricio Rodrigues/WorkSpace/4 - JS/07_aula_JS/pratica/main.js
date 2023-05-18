// Objetos
let aluno = {
    nome1: "Abraao",
    nota: 8,
    idade: 3.15,
    hobbies: ["ping pong", "Castor de Andrade", "Futebol"],
    //            0                1                2
    personalidade: "Jogador caro",
    endereco: {
        numeroCasa: 34,
        nomeRua: "x",
        estado: "sp"
    }
}
console.log(aluno)



console.log(aluno.hobbies[1])

console.log(aluno.endereco.numeroCasa)

console.clear()
const {
    primeiroNome,
    idade,
    nota
} = aluno;

console.log(aluno.nota)
console.log(nota)


// array de objetos
console.clear()
const alunosIOS = [
    {
        nomeAluno: "Higor",
        idade: "54",
        nota: 9
    },
    {
        nomeAluno: "Marcos",
        idade: 12,
        nota: 8
    },
    {
        nomeAluno: "Thaina",
        idade: 35,
        nota: 10
    }
]

console.log(alunosIOS)
console.log(alunosIOS[0])
console.log(alunosIOS[0].nota)