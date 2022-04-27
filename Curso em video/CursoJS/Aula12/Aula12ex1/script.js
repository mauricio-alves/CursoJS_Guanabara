function carregar() {
  var msg = document.querySelector("#msg");
  var img = document.querySelector("#imagem");
  var data = new Date();
  var horaAtual = data.getHours();
  msg.innerHTML = `Agora são ${horaAtual} horas.`;
  if (horaAtual >= 0 && horaAtual < 12) {
    img.src = "/Aula12/Aula12ex1/src/morning.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (horaAtual >= 12 && horaAtual <= 18) {
    img.src = "/Aula12/Aula12ex1/src/afternoon.jpg";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "/Aula12/Aula12ex1/src/night.jpg";
    document.body.style.background = "#515154";
  }
}
