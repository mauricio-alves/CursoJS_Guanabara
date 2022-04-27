function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.querySelector("#txtano");
  var res = document.querySelector("#res");

  if (formAno.value.length == 0 || parseInt(formAno.value) > ano) {
    alert("ERROR! Verifique os dados e tente novamente!");
  } else {
    var formSex = document.getElementsByName("radsex");
    var idade = ano - parseInt(formAno.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "imagem");

    if (formSex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "src/baby boy.jpg");
      } else if (idade < 18) {
        img.setAttribute("src", "src/teen male.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "src/adult man.png");
      } else {
        img.setAttribute("src", "src/old man.jpg");
      }
    } else if (formSex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "src/baby girl.jpg");
      } else if (idade < 18) {
        img.setAttribute("src", "src/teen female.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "src/adult woman.jpg");
      } else {
        img.setAttribute("src", "src/old woman.jpg");
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
