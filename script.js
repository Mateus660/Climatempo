const key = "ad6dceb519ab98d72783812f6818e44b"

function colocarDadosNaTela(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de Umidade"
   
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
     
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    
    buscarCidade(cidade)
}