function renderizarMensagemTela1() {
    document.querySelector(".tela1").innerHTML = `
    <header class="topo">
        <h1>BuzzQuiz</h1>
    </header>
  <main>
    <section class="meu-quizz">
      <div class="quizz-vazio ">
        <p>Você não criou nenhum quiz ainda :(</p>
        <button>Criar Quizz</button>
      </div>
      <div class="quizz-completo oculto">
        <div class="titulo">
          <h3>Seus Quizzes</h3>
          <ion-icon name="add-circle"></ion-icon>
        </div>
        <div class="quizzes">
          <div class="quizz simpsons">
            <p>
              Acerte os personagens corretos dos Simpsons e prove seu amor!
            </p>
          </div>
          <div class="quizz de-boas">
            <p>
              O quanto você é de boas?
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="todos-quizz">
      <h3>Todos os Quizzes</h3>
      <div class="quizzes">
        <div class="quizz simpsons">
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="quizz de-boas">
          <p>
            O quanto você é de boas?
          </p>
        </div>
        <div class="quizz simpsons">
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="quizz de-boas">
          <p>
            O quanto você é de boas?
          </p>
        </div>
        <div class="quizz simpsons">
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="quizz de-boas">
          <p>
            O quanto você é de boas?
          </p>
        </div>
      </div>
    </section>
  </main>
    `
}

renderizarMensagemTela1();