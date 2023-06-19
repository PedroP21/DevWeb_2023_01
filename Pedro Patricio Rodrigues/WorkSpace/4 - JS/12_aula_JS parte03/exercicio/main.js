function calcularTabuada() {
    var valor = parseInt(document.getElementById("valor").value);
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
      var resultado = valor * i;
      resultadoDiv.innerHTML += "<p>" + valor + " x " + i + " = " + resultado + "</p>";
    }
  }