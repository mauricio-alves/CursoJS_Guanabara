function contar() {
  var inicio = document.querySelector("#txti");
  var fim = document.querySelector("#txtf");
  var passo = document.querySelector("#txtp");
  var res = document.querySelector("#res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("ERRO! Digite algum número!");
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = "Contando... <br>";
    let i = parseInt(inicio.value);
    let f = parseInt(fim.value);
    let p = parseInt(passo.value);

    if (p <= 0) {
      alert("Passo inválido! Considerando passo 1");
      p = 1;
    }

    if (i < f) {
      // contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      // contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
