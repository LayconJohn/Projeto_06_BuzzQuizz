//Variáveis Globais
const meuQuiz = document.querySelector(".meu-quizz");
const tela1 = document.querySelector(".tela1");
const tela2 = document.querySelector(".tela2");
const tela3 = document.querySelector(".tela3");
const TEMPO_2S = 2;
let quizzGeral = [];
let quizzesSelecionados = [];
let titulo;
let imagemURL;
let idQuizz;
let levelQuizz;
let questionsQuizz;
let idElemento;
let quizzUsuario = [] // JSON.parse(localStorage.getItem(""));
let acertos = 0;

function renderizarMensagemTela1() {
  const promise = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
  promise.then(function(response){
    quizzGeral = response.data;
    inserirTela1();
    inserirMeuQuiz();
    inserirTodosQuizz();
  });
}

function inserirTela1() {
  document.querySelector(".tela1").innerHTML += `
  <header class="topo">
    <h1>BuzzQuiz</h1>
  </header>
    <main>
      <section class="meu-quizz">

      </section>

      <section class="todos-quizz">

      </section>
    </main>
  `
}

function inserirMeuQuiz() {
  document.querySelector(".meu-quizz").innerHTML = `
    <div class="quizz-vazio ">
      <p>Você não criou nenhum quiz ainda :(</p>
      <button onclick="criarBotao()">Criar Quizz</button>
    </div>
    <div class="quizz-completo oculto">
      <div class="titulo">
        <h3>Seus Quizzes</h3>
        <ion-icon name="add-circle" onclick="criarBotao()"></ion-icon>
      </div>
      <div class="tela1-quizzes">
        <div class="tela1-quizz simpsons" onclick="selecionarQuizz(this)">
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="tela1-quizz de-boas" onclick="selecionarQuizz(this)">
          <p>
            O quanto você é de boas?
          </p>
        </div>
      </div>
    </div>
  `
}

function inserirTodosQuizz() {
  let espacoTodosQuizz = document.querySelector(".todos-quizz");
  espacoTodosQuizz.innerHTML = `
    <h3>Todos os Quizzes</h3>
    <div class="tela1-quizzes" id="tela1-quizzes">

    </div>
    `

    let cardQuizzes = document.querySelector("#tela1-quizzes");
    cardQuizzes.innerHTML = ``;      
    
    for (let i = 0; i < 6; i ++) {
      //quizzUsuario.indexOf(quizzGeral[i].id) === -1
      if(true){
        titulo = quizzGeral[i].title;
        imagemURL = quizzGeral[i].image;
        idQuizz = quizzGeral[i].id;
        levelQuizz = quizzGeral[i].levels;
        questionsQuizz = quizzGeral[i].questions;
  
        cardQuizzes.innerHTML += `
        <div class="tela1-quizz ${idQuizz}" onclick="selecionarQuizz(this)" id="${idQuizz}">
          <img
            src=${imagemURL}
            alt=""
          />
          <p>
            ${titulo}
          </p>
        </div>
        `;
        armazenarQuizz()
      }
    }
}

function criarBotao() {
  tela1.classList.add("oculto");
  tela3.classList.remove("oculto");
}

function pegarTodosQuizz() {
  const promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
  promisse.then(carregarQuizz);
  promisse.catch(tratarErro);
}

function carregarQuizz(response) {
  quizzGeral = response.data 
  renderizarMensagemTela1();
}

function tratarErro() {
  console.log("Deu ruim (Erro)");
}

function armazenarQuizz() {
  quizzesSelecionados.push({id: idQuizz, titulo: titulo, imagem: imagemURL, questions: questionsQuizz, levels: levelQuizz})
}

pegarTodosQuizz();
