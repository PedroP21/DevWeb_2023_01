let contador = 1;

while (contador <= 50) {
    console.log(`valor = ${contador}`);
    contador++;
}


let contador1 = 10;

do {
  console.log(`valor regressivo = ${contador1}`);
  contador1--;
} while (contador1 >= 0);


for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`pares = ${i}`);
    }
  }
  