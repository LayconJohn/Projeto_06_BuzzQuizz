let quizzSelecionado;

function mostrarRespostas(resposta){
    console.log(resposta.parentNode);
    resposta.parentNode.querySelector(".certa").classList.add("verde");
    let errada = resposta.parentNode.querySelectorAll(".errada");

    for(let i=0; i < errada.length; i++){
        errada[i].classList.add("vermelho");
    }

    let respostas = resposta.parentNode.querySelectorAll(".container-quizz");

    for(let i=0; i < respostas.length; i++){
        respostas[i].classList.add("opacidade");
        respostas[i].removeAttribute("onclick");
    }

    resposta.classList.remove("opacidade");
}

function comparador() {
    return Math.random()-0.5
}

function inserirQuestoes() {
    let questoes = quizzSelecionado.questions;
    for (let i = 0; i < questoes.length; i++) {
        let listaRespostas = questoes[i].answers.sort(comparador);
        let respostashtml = ""
        for(let j = 0; j < listaRespostas.length; j++) {

            if(listaRespostas[j].isCorrectAnswer){
                respostashtml += `
                <div onclick="mostrarRespostas(this)" class="container-quizz certa">
                    <div class="quizz">
                        <img src=${listaRespostas[j].image}/>
                    </div>
                    <p class="estilo2">${listaRespostas[j].text}</p>
                </div>
                `
            } else {
                respostashtml += `
                <div onclick="mostrarRespostas(this)" class="container-quizz errada">
                    <div class="quizz">
                        <img src=${listaRespostas[j].image}/>
                    </div>
                    <p class="estilo2">${listaRespostas[j].text}</p>
                </div>
                `
            }

        }
        
        document.querySelector(".pagina").innerHTML += `
        <div class="tela2-container">
            <div class="cabecalho">
                <p class="estilo1">${questoes[i].title}</p>
            </div>
            <div class="quizzes">
                ${respostashtml}
            </div>
        </div>
        `
    }
} 
  

function inserirTituloTela2() {
    document.querySelector(".tela2").innerHTML = "";
  
    document.querySelector(".tela2").innerHTML += `
    
    <div class="tela2-banner">
        <div class="tela2-titulo">
            <h3>${quizzSelecionado.title}</h3>
        </div>
        <img
            src=${quizzSelecionado.image}
            alt=""
        />
    </div>
  
    <div class="pagina">
    
    </div>
    `
}

function selecionarQuizz(quizz) {
    tela1.classList.add("oculto");
    tela2.classList.remove("oculto");
    const promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizz.id}`)
    promise.then(function(response){
        quizzSelecionado = response.data;
        inserirTituloTela2();
        inserirQuestoes();
    });
}

//inserirTela2 ()