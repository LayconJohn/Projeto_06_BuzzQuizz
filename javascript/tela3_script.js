let titlePerg;
let corFundo;
let respCorreta;
let URLresp;
let respIncorreta;
let URLresp1;
let respIncorreta2;
let URLresp2;
let pergunta;
let nivel;
let titleNivel;
let PorcentagemAcerto;
let URLnivel;
let Descri;
let url;
let title;



let analise = []

const padraoURL = /^https?:\/\/.+\/.+$/
const padraoCor = /^#[0-9A-F]{6}$/

function InserirTela3 (){
    const tela3 = document.querySelector(".tela3")
        tela3.innerHTML = `<header>BuzzQuizz</header>
        <!-- PARTE 1 -->
        <div id="começo" class="questionario">
        <h1>Comece pelo começo</h1>
        <div class="container">
            <input class="titleQuizz"  placeholder="Título do seu quizz"></input>
            <input class="URLQuizz" placeholder="URL da imagem do seu quizz"></input>
            <input  class="pergQuizz" placeholder="Quantidade de perguntas do quizz"></input>
            <input class="nivelQuizz" placeholder="Quantidade de níveis do quizz"></input>
        </div>
        <div onclick="validacaoTela1()" class="botao"> <div class="next">Prosseguir pra criar perguntas</div></div>
        </div>
        <!-- PARTE 1 -->

        <!-- PARTE 2 -->
        <div id="perguntas" class="questionario oculto">
            <h1>Crie suas perguntas</h1>
            <div id="bug" class="container">
            
            </div>
    <div onclick="validadeFinal()" class="botao marginb"> <div class="next">Prosseguir pra criar níveis</div></div>
            </div>
        </div>
        <!-- PARTE 2 -->

        <!-- PARTE 3 -->
<div id="niveis" class="questionario oculto">
            <h1>Agora, decida os níveis</h1>
            <div id="level" class="container">
            
            </div>
    <div onclick="validarNIVEIS()" class="botao marginb margint"> <div class="next">Finalizar Quizz</div></div>
            </div>
        </div>
        <!-- PARTE 3 -->

        <!-- PARTE 4 -->
        <div id="finalizado" class="questionario tres oculto"> 
            
        </div>
        <!-- PARTE 3 -->`
        
        
        
}
InserirTela3 ()


function validacaoTela1(){
    title = document.querySelector(".titleQuizz").value
    url = document.querySelector(".URLQuizz").value
    let nivel = document.querySelector(".nivelQuizz").value
    pergunta = document.querySelector(".pergQuizz").value    
    //variavel de padrao da url utilizando Expressões Regulares
    const padrao = /^https?:\/\/.+\/.+$/
    //variavel de padrao da url utilizando Expressões Regulares
    
    //Arrays de preenchimento dos níveis e perguntas
    const quantPerguntas=[];
    const quantniveis=[]
    //Arrays de preenchimento dos níveis e perguntas

    //validação do titulo
    if((title.length >= 20 && title.length <= 65) && (padrao.test(url) == true) && pergunta >= 3 && nivel >= 2){
        const quest1 = document.querySelector("#começo")
        quest1.classList.add("oculto")
        const quest2 = document.querySelector("#perguntas")
        quest2.classList.remove("oculto")
        MostrarPerguntas()
    } else{
       alert("Dados Incorretos")
     }

}

function MostrarPerguntas(){
    pergunta = document.querySelector(".pergQuizz").value
    
const coletor = document.querySelector("#bug")
for (let i = 1; i <= pergunta; i++){
            
            coletor.innerHTML += `           
            <div class="topicos margint">Pergunta ${i} <img class="icon"src="imagens/edit.svg"></div>
            <div class="caixona">
                <input onclick="selecionarElemento(this)" class="titlePergunta marginb" placeholder="Texto da pergunta"></input>
                <input onclick="selecionarElemento(this)" class="corFundo" placeholder="Cor de fundo da pergunta"></input>
                <div class="topicos marginl">Resposta Correta</div>
                <input onclick="selecionarElemento(this)" class="respCorreta marginb" placeholder="Resposta correta"></input>
                <input onclick="selecionarElemento(this)" class="URLresp" placeholder="URL da imagem"></input>
                <div class="topicos marginl">Resposta Incorreta</div>
                <input onclick="selecionarElemento(this)" class="respIncorreta marginb" placeholder="Resposta incorreta 1"></input>
                <input onclick="selecionarElemento(this)" class="URLresp1 marginb " placeholder="URL da imagem 1"></input>
                <input onclick="selecionarElemento(this)" class="respIncorreta2 marginb margint" placeholder="Resposta incorreta 2"></input>
                <input  onclick="selecionarElemento(this)" class="URLresp2 marginb" placeholder="URL da imagem 2"></input>
                </div>`
        
            analise.push(coletor.innerHTML)
            
}
    console.log(analise)
            }


 function validarTitulo(){
          titlePerg = document.querySelectorAll(".titlePergunta");
         for (let i = 0; i < pergunta; i++){
         if( titlePerg[i].value.length >= 20){
             return true
           } else {
            return false
          }
      }
    }

function validarCor(){
    corFundo = document.querySelectorAll(".corFundo");
       for (let i = 0; i < pergunta; i++){
       if( padraoCor.test(corFundo[i].value) == true){
           return true
         } else {
          return false
        }
    }
  }

  function validarCorreta(){
    respCorreta = document.querySelectorAll(".respCorreta");
    for (let i = 0; i < pergunta; i++){
        if( respCorreta[i].value !== ""){
            return true
          } else {
           return false
         }
     }
  }

  function validarURL(){
    URLresp = document.querySelectorAll(".URLresp");
    for (let i = 0; i < pergunta; i++){
        if( padraoURL.test(URLresp[i].value) == true){
            return true
          } else {
           return false
         }
     }
  }

  function validarIncorreta(){
    respIncorreta = document.querySelectorAll(".respIncorreta")
    for (let i = 0; i < pergunta; i++){
        if( respIncorreta[i].value !== ""){
            return true
          } else {
           return false
         }
     }
  }

  function validarURLresp1(){
    URLresp1 = document.querySelectorAll(".URLresp1");
    for (let i = 0; i < pergunta; i++){
        if( padraoURL.test(URLresp1[i].value) == true){
            return true
          } else {
           return false
         }
     }
  }

  function validarIncorreta2(){
    respIncorreta2 = document.querySelectorAll(".respIncorreta2")
    for (let i = 0; i < pergunta; i++){
        if( respIncorreta2[i].value !== ""){
            return true
          } else {
           return false
         }
     }
  }

  function validarURLresp2(){
    URLresp2 = document.querySelectorAll(".URLresp2");
    for (let i = 0; i < pergunta; i++){
        if( padraoURL.test(URLresp2[i].value) == true){
            return true
          } else {
           return false
         }
     }
  }

  function validadeFinal(){
      if(validarTitulo() == true && validarCor() == true && validarCorreta() && validarURL() && (validarIncorreta() && validarURLresp1()) || (validarIncorreta2() && validarURLresp2())){
        const quest2 = document.querySelector("#perguntas")
        quest2.classList.add("oculto")
        const quest3 = document.querySelector("#niveis")
        quest3.classList.remove("oculto")
        MostrarNiveis()
      } else {
          alert("Preencher dados corretamente")
      }
  }

  function MostrarNiveis(){
    nivel = document.querySelector(".nivelQuizz").value
    const coletor = document.querySelector("#level")
    for (let i = 1; i <= nivel; i++){
            
      coletor.innerHTML += `           
      <div class="topicos margint">Nível ${i} <img class="icon"src="imagens/edit.svg"></div>
      <div class="caixona">
          <input onclick="selecionarElementoNivel(this)" class="titleNivel marginb" placeholder="Texto da pergunta"></input>
          <input onclick="selecionarElementoNivel(this)" class="PorcentagemAcerto marginb" placeholder="% de acerto mínima"></input>
          <input onclick="selecionarElementoNivel(this)" class="URLnivel marginb" placeholder="URL da imagem do nível"></input>
          <input onclick="selecionarElementoNivel(this)" class="Descri marginb" placeholder="Descrição do nível"></input>
          </div>`
  
      
      
}
  }

  function validarTituloNivel(){
    titleNivel = document.querySelectorAll(".titleNivel");
   for (let i = 0; i < nivel; i++){
   if( titlePerg[i].value.length >= 10){
       return true
     } else {
      return false
    }
}
}

function validarPorcentagem(){
  PorcentagemAcerto = document.querySelectorAll(".PorcentagemAcerto");
  for (let i = 0; i < nivel; i++){
    if( PorcentagemAcerto[i].value >= 0 && PorcentagemAcerto[i].value <= 100){
        return true
      } else {
       return false
     }
 }
}

function validarURLnivel(){
  URLnivel = document.querySelectorAll(".URLnivel");
  for (let i = 0; i < nivel; i++){
      if( padraoURL.test(URLnivel[i].value) == true){
          return true
        } else {
         return false
       }
   }
}

function validarDescri(){
  Descri = document.querySelectorAll(".Descri");
 for (let i = 0; i < nivel; i++){
 if( titlePerg[i].value.length >= 30){
     return true
   } else {
    return false
  }
}
}

function validarNIVEIS(){
  if(validarTituloNivel() === true && validarPorcentagem() === true  && validarURLnivel() === true  && validarDescri()=== true ){
        const quest3 = document.querySelector("#niveis")
        quest3.classList.add("oculto")
        const quest4 = document.querySelector("#finalizado")
        quest4.classList.remove("oculto")
        MostrarFinalizado()
      } else {
          alert("Preencher dados corretamente")
      }
  } 

  function MostrarFinalizado(){
    const coletor = document.querySelector("#finalizado")
    coletor.innerHTML = `<h1>Seu quizz está pronto!</h1>
    <div class="imagens"><img class="rebelde"src="${url}"><figcaption>${title}</figcaption></div>
    <div onclick="inserirMeuQuiz()"class="botao marginb margint"> <div class="next">Acessar Quizz</div></div>
    <h2 onclick="Home()">Voltar pra o home</h2>`
  }

  function Home(){
    tela3.classList.add("oculto");
    tela1.classList.remove("oculto");
    
  }







// 
