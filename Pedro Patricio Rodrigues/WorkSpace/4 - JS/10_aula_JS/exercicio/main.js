class pessoa {
    constructor(nome, nascimento) {
      this.nome = nome;
      this.nascimento = nascimento;
    }
    getIdade() {
      const hoje = new Date();
      const anoAtual = hoje.getFullYear()
      const mesAtual = hoje.getMonth()
      const diaAtual = hoje.getDate()
  
      const anoNascimento = this.nascimento.getFullYear()
      const mesNascimento = this.nascimento.getMonth()
      const diaNascimento = this.nascimento.getDate()
  
      let idade = anoAtual - anoNascimento
  
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
      }
  
      return idade;
    }
  }
  
  pessoa.prototype.getNiver = function () {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
  
    const mesNascimento = this.nascimento.getMonth();
    const diaNascimento = this.nascimento.getDate();
  
    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
      return true
    } else {
      return false
    }
  }
  
  const pessoas = []
  
  pessoas[0] = new pessoa("Camila", new Date(1992, 8, 12))
  pessoas[1] = new pessoa("Jorge", new Date(1976, 11, 5))
  pessoas[2] = new pessoa("Claudio", new Date(1984, 1, 30))
  pessoas[3] = new pessoa("Marta", new Date(2005, 5, 7))
  pessoas[4] = new pessoa("Agatha", new Date(1969, 7, 9))
  pessoas[5] = new pessoa("Mauricio", new Date(1983, 11, 5))
  pessoas[6] = new pessoa("Henrique", new Date(1993, 5, 13))
  pessoas[7] = new pessoa("Ana", new Date(1978, 12, 11))
  pessoas[8] = new pessoa("Marcos", new Date(1999, 11, 18))
  pessoas[9] = new pessoa("Bianca", new Date(1982, 8, 14))
  
  for (let i = 0; i < pessoas.length; i++) {
      const pessoa = pessoas[i]
      const idade = pessoa.getIdade()
      const fezAniversario = pessoa.getNiver() ? " já fez aniversário este ano" : " ainda não fez aniversário este ano"
      console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario}`)
  }