let chave = "97ee143be56db2ec6cddd538e0f2d072"

//console.log("JavaScript Funcionando")

function cliqueiNoBotao(){
  let cidade = document.querySelector(".input-cidade").value
  
  buscarCidade(cidade)
}

async function  buscarCidade(cidade){
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric")
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}

function colocarNaTela(dados){
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
  document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
  document.querySelector(".descricao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

  //console.log(dados)
}