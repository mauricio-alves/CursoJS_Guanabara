function tabuada() {
  let num = document.querySelector("#txtn");
  let tab = document.querySelector("#seltab");

  if (num.value.length == 0) {
    alert("ERRO! Digite um número!");
  } else {
    let i = parseInt(num.value);
    tab.innerHTML = "";

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${i} x ${c} = ${i * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
    }
  }
}
