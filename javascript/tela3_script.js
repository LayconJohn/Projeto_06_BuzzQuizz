

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
            <div class="botao marginb"> <div class="next">Prosseguir pra criar níveis</div></div>
            </div>
        </div>
        <!-- PARTE 2 -->

        <!-- PARTE 3 -->
        <div class="questionario tres oculto"> 
            <h1>Seu quizz está pronto!</h1>
            <div class="imagens"><img src="imagens/hp.png"><figcaption>quão Potterhead é você?</figcaption></div>
            <div class="botao marginb margint"> <div class="next">Acessar Quizz</div></div>
            <h2>Voltar pra o home</h2>
        </div>
        <!-- PARTE 3 -->`
        
        
        
}
InserirTela3 ()


function validacaoTela1(){
    let title = document.querySelector(".titleQuizz").value
    let url = document.querySelector(".URLQuizz").value
    let perg = document.querySelector(".pergQuizz").value
    let nivel = document.querySelector(".nivelQuizz").value    
    //variavel de padrao da url utilizando Expressões Regulares
    const padrao = /^https?:\/\/.+\/.+$/
    //variavel de padrao da url utilizando Expressões Regulares
    
    //Arrays de preenchimento dos níveis e perguntas
    const quantPerguntas=[];
    const quantniveis=[]
    //Arrays de preenchimento dos níveis e perguntas

    //validação do titulo
    if((title.length >= 20 && title.length <= 65) && (padrao.test(url) == true) && perg >= 3 && nivel >= 2){
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
    let perg = document.querySelector(".pergQuizz").value

const ovo = document.querySelector("#bug")
for (let i = 1; i <= perg; i++){
            ovo.innerHTML += `           
            <div class="topicos margint">Pergunta ${i} <img class="icon"src="imagens/edit.svg"></div>
            <div class="caixona">
                <input class="marginb"placeholder="Texto da pergunta"></input>
                <input placeholder="Cor de fundo da pergunta"></input>
                <div class="topicos marginl">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta correta"></input>
                <input placeholder="URL da imagem"></input>
                <div class="topicos marginl">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta incorreta 1"></input>
                <input class="marginb " placeholder="URL da imagem 1"></input>
                <input class="marginb margint" placeholder="Resposta incorreta 2"></input>
                <input  class="marginb" placeholder="URL da imagem 2"></input>
                </div>`
}
            }
            
function validacaoTela2(){
    
}
