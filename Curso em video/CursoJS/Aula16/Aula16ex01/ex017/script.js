let numero = document.querySelector("#fnum");
let lista = document.querySelector("#flista");
let res = document.querySelector("#res");
let vetores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, vetores)) {
    vetores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `O valor ${numero.value} foi adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("ERRO! Adicione um número válido!");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (vetores.length == 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    let total = vetores.length;
    let maior = vetores[0];
    let menor = vetores[0];
    let soma = 0;
    let media = 0;
    for (let pos in vetores) {
      soma += vetores[pos];
      if (vetores[pos] > maior) maior = vetores[pos];
      if (vetores[pos] < menor) menor = vetores[pos];
    }
    media = soma / total;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`;
  }
}
