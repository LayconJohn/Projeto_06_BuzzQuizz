function InserirTela3 (){
    const tela3 = document.querySelector(".tela3")
        tela3.innerHTML = `<header>BuzzQuizz</header>
        <!-- PARTE 1 -->
        <div class="questionario">
        <h1>Comece pelo começo</h1>
        <div class="container">
            <input placeholder="Título do seu quizz"></input>
            <input placeholder="URL da imagem do seu quizz"></input>
            <input placeholder="Quantidade de perguntas do quizz"></input>
            <input placeholder="Quantidade de níveis do quizz"></input>
        </div>
        <div class="botao"> <div class="next">Prosseguir pra criar perguntas</div></div>
        </div>
        <!-- PARTE 1 -->

        <!-- PARTE 2 -->
        <div class="questionario esconder">
            <h1>Crie suas perguntas</h1>
            <div class="container">
                <div class="topicos">Pergunta 1</div>
                <input class="marginb"placeholder="Texto da pergunta"></input>
                <input placeholder="Cor de fundo da pergunta"></input>
                <div class="topicos">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta correta"></input>
                <input placeholder="URL da imagem"></input>
                <div class="topicos">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta incorreta 1"></input>
                <input class="marginb " placeholder="URL da imagem 1"></input>
                <input class="marginb margint" placeholder="Resposta incorreta 2"></input>
                <input  class="marginb" placeholder="URL da imagem 2"></input>

                <div class="topicos margint">Pergunta 2 <img class="icon"src="imagens/edit.svg"></div>
                <div class="opções2 esconder">
                <input class="marginb"placeholder="Texto da pergunta"></input>
                <input placeholder="Cor de fundo da pergunta"></input>
                <div class="topicos">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta correta"></input>
                <input placeholder="URL da imagem"></input>
                <div class="topicos">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta incorreta 1"></input>
                <input class="marginb " placeholder="URL da imagem 1"></input>
                <input class="marginb margint" placeholder="Resposta incorreta 2"></input>
                <input  class="marginb" placeholder="URL da imagem 2"></input>
                </div>

                <div class="topicos margint">Pergunta 3 <img class="icon"src="imagens/edit.svg"></div>
                <div class="opções2 esconder">
                <input class="marginb"placeholder="Texto da pergunta"></input>
                <input placeholder="Cor de fundo da pergunta"></input>
                <div class="topicos">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta correta"></input>
                <input placeholder="URL da imagem"></input>
                <div class="topicos">Resposta Correta</div>
                <input class="marginb" placeholder="Resposta incorreta 1"></input>
                <input class="marginb " placeholder="URL da imagem 1"></input>
                <input class="marginb margint" placeholder="Resposta incorreta 2"></input>
                <input  class="marginb" placeholder="URL da imagem 2"></input>
                </div>
            </div>
            <div class="botao marginb"> <div class="next">Prosseguir pra criar níveis</div></div>
        </div>
        <!-- PARTE 2 -->

        <!-- PARTE 3 -->
        <div class="questionario esconder"> 
            <h1>Seu quizz está pronto!</h1>
            <div class="imagens"><img src="imagens/hp.png"><figcaption>quão Potterhead é você?</figcaption></div>
            <div class="botao marginb margint"> <div class="next">Acessar Quizz</div></div>
            <h2>Voltar pra o home</h2>
        </div>
        <!-- PARTE 3 -->`
}
InserirTela3 ()