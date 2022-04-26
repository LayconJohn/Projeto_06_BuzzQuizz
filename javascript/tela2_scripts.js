let quizzSelecionado;
let elementoclicado;
let posicaoContainer = 1;
let questoesRespondidas = 0;
let totalPerguntas;
const TEMPO_1S = 1;
let acertos = 0;

function mostrarRespostas(resposta){
    verificarResposta(resposta)
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

    verificarSeRespondeuTudo();
}

function comparador() {
    return Math.random()-0.5
}

function inserirQuestoes() {
    let questoes = quizzSelecionado.questions;
    totalPerguntas = questoes.length;
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
        <div class="tela2-container" id = "container${i}">
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

function verificarResposta(elemento) {
    elementoclicado = elemento;
     
    if (elementoclicado.classList.contains("certa")) {
      acertos += 1;
    }
    console.log(acertos)


    setTimeout(ScrollTela, TEMPO_2S * 1000)
  }
  
  function ScrollTela() {
    document.querySelector(`#container${posicaoContainer}`).scrollIntoView()
    posicaoContainer += 1;
  
    console.log(document.querySelector(`#container${posicaoContainer}`))
  }

  function inserirTelaFinal() {
    let porcentagemAcerto = (acertos/totalPerguntas)*100;
    document.querySelector(".pagina").innerHTML += `
    <div class="container">
    <div class="cabecalho3">
        <p class="estilo1">${porcentagemAcerto.toFixed(2)}% de acerto: Parabéns</p>
    </div>
    </div>
    <div class="final">
        <div class="botaoreiniciar">
            <p class="estilo3" onclick="reniciarQuizz()" >Reiniciar Quizz</p>
        </div>
        <div class="voltarhome" onclick="voltarHome()">
            <p class="estilo3">Voltar pra home</p>
        </div>
    </div>
    `
  }

  function verificarSeRespondeuTudo() {
    questoesRespondidas += 1;
    if (questoesRespondidas === totalPerguntas) {
        setTimeout(inserirTelaFinal, TEMPO_1S * 1000)
        questoesRespondidas = 0;
    }
  }

  function reniciarQuizz() {
    window.location.reload();
    tela1.classList.add("oculto");
    tela2.classList.remove("oculto");
    inserirTituloTela2();
    inserirQuestoes();
  }

  function voltarHome() {
    window.location.reload()
  }

//inserirTela2 ()