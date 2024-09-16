const key = " ad6dceb519ab98d72783812f6818e44b"

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json())

    console.log(dados)
     
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    
    buscarCidade(cidade)
}